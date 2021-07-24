const signMap = {
  0x00: ' ', // unsigned sign (lol)
  0x40: ' ', // positive sign
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
  0x0: 1,
  0x08: 2,
  0x10: 3,
  0x18: 4,
  0x20: 5,
  0x28: 6,
  0x30: 7,
  0x38: 8,
  0x40: 9,
  0x48: 10,
  0x50: 11,
  0x58: 12,
  0x60: 13,
  0x68: 14,
  0x70: 15,
  0x78: 16,
}

module.exports = {
  signMap,
  digitMap,
  rangeMap,
  holdMap,
}
