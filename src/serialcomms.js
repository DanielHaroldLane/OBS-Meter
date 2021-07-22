require('./segment-display')
const SerialPort = require('serialport')
const { getUnit } = require('./units')
const { getRange } = require('./range')
const { modeMap, signMap, digitMap } = require('./maps')

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

  if (values.includes('L')) {
    return '  0L  '
  }

  return [...values.slice(0, range), '.', ...values.slice(range)].join('')
}

const decode = (data) => {
  const mode = modeMap[data[1]]
  const range = getRange(data[2], mode)
  const sign = signMap[data[4]]
  const unit = getUnit(data[2], mode)
  const value = getValue(data, range)

  return {
    mode,
    range,
    sign,
    unit,
    value,
  }
}

const getPattern = value => value.split('').map(char => char === '.' ? '.' : '#').join('')

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

    display.pattern = getPattern(decoded.value)
    display.setValue(decoded.value)
    mode.setValue(`MODE: ${decoded.mode}`)
    unit.innerText = decoded.unit || ''
    await port.write(buffer)
  })

  await port.write(buffer)
}

const getPorts = async () => {
  const ports = await getSerialPorts()

  ports.forEach(port => {
    const option = document.createElement('option');
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
