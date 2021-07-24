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
  0x00: 'unsigned', // not sure what this is for
  0x40: '', // positive sign
  0x50: '-', // negative sign
}

const holdMap = {
  0x00: '',
  0x01: 'Auto Hold',
  0x02: 'Peak + Hold',
  0x03: 'Peak - Hold',
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
  0x80: 1,
  0x88: 2,
  0x90: 3,
  0x98: 4,
  0xa0: 5,
  0xa8: 6,
  0xb0: 7,
  0xb8: 8,
  0xc0: 9,
  0xc8: 10,
  0xd0: 11,
  0xd8: 12,
  0xe0: 13,
  0xe8: 14,
  0xf0: 15,
  0xf8: 16,
}

module.exports = {
  modeMap,
  signMap,
  digitMap,
  rangeMap,
  holdMap,
}
