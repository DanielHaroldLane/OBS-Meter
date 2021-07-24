const { rangeMap } = require('./maps')

const getRange = (byte, mode) => {
  let range = rangeMap[byte]

  if (mode === 'Resistance') {
    switch (range) {
      case 1:
        range = 3
        break
      case 5:
      case 6:
        range = 1
        break
      default:
        range -= 1
    }
    return range
  }

  if (mode === 'Capacitance') {
    if (range > 4) {
      range -= 3
    }
    return range
  }

  return range
}

module.exports = {
  getRange,
}
