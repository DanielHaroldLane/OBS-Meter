const SerialPort = require('serialport')
const { getUnit } = require('./units')
const { getRange } = require('./range')
const { modeMap, signMap, digitMap } = require('./maps')

const serialElement = document.getElementById('serial')
const modeElement = document.getElementById('mode')

const getSerialPorts = async () => SerialPort.list()

const parseDigit = (byte) => digitMap[byte]

const decode = (data) => {
  const mode = modeMap[data[1]]
  const range = getRange(data[2], mode)
  const sign = signMap[data[4]]
  const unit = getUnit(data[2], mode)
  const value = [
    parseDigit(data[5]),
    parseDigit(data[6]),
    parseDigit(data[7]),
    parseDigit(data[8]),
    parseDigit(data[9]),
  ]

  return {
    mode,
    range,
    sign,
    unit,
    value: [...value.slice(0, range), '.', ...value.slice(range)].join(''),
  }
}

//[137, 240, 192, 129, 80, 48, 48, 48, 48, 54, 48, 10] // serial data packet is 12 bytes

const pollPorts = async () => {
  const ports = await getSerialPorts()

  const selectedPort = ports[ports.length - 1]
  const buffer = new Buffer.from([0x89])
  console.log(selectedPort)

  const port = new SerialPort(
    selectedPort.path,
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
    console.log(decoded)

    serialElement.innerText = decoded.value + ' ' + decoded.unit
    modeElement.innerText = decoded.mode
    await port.write(buffer)
  })

  await port.write(buffer)
}

pollPorts()
