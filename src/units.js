const { rangeMap } = require('./maps')

const getResistanceUnit = (byte) => {
  const rawRange = rangeMap[byte & 0x38]
  let unit = '㏀'

  switch (rawRange) {
    case 1:
      unit = 'Ω';
      break;
    case 5:
    case 6:
      unit = '㏁'
  }

  return unit
}

const getUnit = (byte, mode) => {
  let unit = ''

  if(mode === 'VCC'|| mode === 'Diode/Continuity' || mode === 'VAC') {
    return 'V'
  }

  if (mode === 'Millivolts') {
    return '㎷'
  }

  if (mode === 'Current A') {
    return 'A'
  }

  if (mode === 'Current mA') {
    return '㎃'
  }

  if(mode === 'Resistance') {
    return getResistanceUnit(byte)
  }
  
  if (mode === 'Capacitance') {
    if (rangeMap[byte & 0x38] < 4) {
      unit = '㎋'
    } else {
      unit = '㎌'
    }

    return unit
  }

  return unit
}

module.exports = {
  getUnit
}