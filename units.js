const { rangeMap } = require('./maps')

const getUnit = (byte, mode) => {
  let unit = ''
  console.log('getUnit(range): ', rangeMap[byte & 0x38])

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
    switch (rangeMap[byte & 0x38]) {
      case 5:
      case 6:
        unit = '㏁'
        break
      default:
        unit = '㏀'
    }

    return unit
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