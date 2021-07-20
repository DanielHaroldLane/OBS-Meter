const modeMap = {
  0xa0: 'Generator',
  0xa8: 'Current A',
  0xb0: 'Current mA',
  0xc0: 'Temperature',
  0xc8: 'Capacitance',
  0xd0: 'Frequency',
  0xd8: 'Diode/Continuity',
  0xe0: 'Resistance',
  0xe1: 'Resistance',
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

const rangeMap = {
  0x0: 1,
  0x08: 2,
  0x10: 3,
  0x18: 4,
  0x20: 5,
  0x28: 6,
} // range digits, used to represent the precision of a number

module.exports = {
  modeMap,
  signMap,
  digitMap,
  rangeMap
}