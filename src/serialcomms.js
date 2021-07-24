require('./segment-display')
const SerialPort = require('serialport')
const fs = require('fs')
const { signMap, digitMap, holdMap, rangeMap } = require('./maps')
const { meterFunctions } = require('./meter-functions')

const output = document.getElementById('output')
const portContainer = document.getElementById('ports')

let selectedPort = null
const portSelector = document.getElementById('com-select')

const display = new SegmentDisplay('display')
display.pattern = '#############'
display.value = 'UNINITIALIZED'
display.displayAngle = 6
display.digitHeight = 20
display.digitWidth = 14
display.digitDistance = 2.5
display.segmentWidth = 2
display.segmentDistance = 0.3
display.segmentCount = 14
display.cornerType = 1
display.colorOn = '#e95d00'
display.colorOff = '#000000'
display.draw()

const mode = new SegmentDisplay('mode')
mode.pattern = '####:#################'
mode.displayAngle = 6
mode.digitHeight = 20
mode.digitWidth = 14
mode.digitDistance = 2.5
mode.segmentWidth = 2
mode.segmentDistance = 0.3
mode.segmentCount = 14
mode.cornerType = 1
mode.colorOn = '#00b200'
mode.colorOff = '#000000'
mode.value = 'MODE: UNINTIALIZED'
mode.draw()

const unit = document.getElementById('unit')

const getSerialPorts = async () => SerialPort.list()

const parseDigit = (byte) => digitMap[byte]

const getValue = (data, range) => {
  let values = [
    parseDigit(data[5]),
    parseDigit(data[6]),
    parseDigit(data[7]),
    parseDigit(data[8]),
    parseDigit(data[9]),
  ]

  return values
}

const decode = (data) => {
  const meterFunction = meterFunctions[data[1]]
  const range = meterFunction.ranges[rangeMap[data[2] & 0x7c]]
  const sign = signMap[data[4] & 0x70]
  const hold = holdMap[data[4] & 0x3]
  const value = getValue(data, range)

  return {
    meterFunction,
    range,
    hold,
    sign,
    value,
  }
}

const getPattern = (decoded) =>
  [
    ...new Array(decoded.range.decimalplace).fill('#'),
    '.',
    ...new Array(decoded.value.length - decoded.range.decimalplace).fill('#'),
  ].join('')

const getDisplayValue = (decoded) =>
  decoded.range.decimalplace
    ? [
        ...decoded.value.slice(0, decoded.range.decimalplace),
        '.',
        ...decoded.value.slice(
          decoded.range.decimalplace,
          decoded.value.length
        ),
      ].join('')
    : decoded.value.join('')

const pollSerialData = async () => {
  const buffer = new Buffer.from([0x89])

  const port = new SerialPort(
    selectedPort,
    {
      baudRate: 9600,
      dataBits: 8,
      parity: 'none',
      stopBits: 1,
    },
    false
  )

  port.on('data', async (data) => {
    const dataArr = Array.from(data)
    const decoded = decode(dataArr)
    display.pattern = getPattern(decoded)
    display.setValue(getDisplayValue(decoded))
    mode.setValue(`MODE: ${decoded.meterFunction.label}`)
    unit.innerText = decoded.range.unit || ''
    await port.write(buffer)
  })

  await port.write(buffer)
}

const getPorts = async () => {
  const ports = await getSerialPorts()

  ports.forEach((port) => {
    const option = document.createElement('option')
    option.text = port.path
    portSelector.add(option)
  })
}

const portSelectorEventListener = (event) => {
  selectedPort = event.target.value
  portSelector.removeEventListener('changed', portSelectorEventListener)
  portContainer.style = 'display: none'
  output.style = 'display: initial'
  pollSerialData()
}

portSelector.addEventListener('change', portSelectorEventListener)

getPorts()
