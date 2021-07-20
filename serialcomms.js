const SerialPort = require('serialport')

const serialElement = document.getElementById('serial')
const modeElement = document.getElementById('mode')

const getSerialPorts = async () => SerialPort.list()

const modeMap = {
  0xa0: 'Generator',
  0xa8: 'Current A',
  0xb0: 'Current mA',
  0xc0: 'Temperature',
  0xc8: 'Capacitance',
  0xd0: 'Frequency',
  0xd8: 'Diode Mode',
  0xe0: 'Resistance',
  0xe8: 'Millivolts',
  0xf0: 'VCC',
  0xf8: 'VAC',
}

const signMap = {
  0x0: 'unsigned', // not sure what this is for
  0x40: '', // positive sign
  0x50: '-', // negative sign
}

const digitMap = {
  0x30: 0,
  0x31: 1,
  0x32: 2,
  0x33: 3,
  0x34: 4,
  0x35: 5,
  0x36: 6,
  0x37: 7,
  0x38: 8,
  0x39: 9,
  0x3e: 'L',
  0x3f: ' ',
} // digits displayed on screen

const parseDigit = (byte) => digitMap[byte]

const rangeMap = {
  0x0: 1,
  0x08: 2,
  0x10: 3,
  0x18: 4,
  0x20: 5,
  0x28: 6,
} // range digits, used to represent the precision of a number

const getRange = (byte, mode) => {
  let range = rangeMap[byte & 0x38]

  if (mode === 'Resistance') {
    switch (range) {
      case 1:
        range += 2
        break
      case 5:
      case 6:
        range = 1
        break
      default:
        range -= 1
    }
  }

  return range
}

const decode = (data) => {
  const mode = modeMap[data[1]]
  const range = getRange(data[2], mode)
  const sign = signMap[data[4]]
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
    value: [...value.slice(0, range), '.', ...value.slice(range)].join(''),
  }
}

//[137, 240, 192, 129, 80, 48, 48, 48, 48, 54, 48, 10] // serial data packet is 12 bytes

const pollPorts = async () => {
  const ports = await getSerialPorts()
  const selectedPort = ports[0]
  const buffer = new Buffer.from([0x89])

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
    serialElement.innerText = decoded.value
    modeElement.innerText = decoded.mode
    await port.write(buffer)
  })

  await port.write(buffer)
}

pollPorts()
