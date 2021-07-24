const meterFunctions = {
  0xa0: {
    label: 'Function Generator ⎍⎍',
    ranges: {
      1: {
        range: '0.5 Hz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'Hz',
      },
      2: {
        range: '1 Hz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'Hz',
      },
      3: {
        range: '2 Hz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'Hz',
      },
      4: {
        range: '10 Hz',
        resolution: '0.001 Hz',
        decimalplace: 2,
        unit: 'Hz',
      },
      5: {
        range: '50 Hz',
        resolution: '0.001 Hz',
        decimalplace: 2,
        unit: 'Hz',
      },
      6: {
        range: '60.240 Hz',
        resolution: '0.001 Hz',
        decimalplace: 2,
        unit: 'Hz',
      },
      7: {
        range: '74.63 Hz',
        resolution: '0.01 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      8: {
        range: '100.00 Hz',
        resolution: '0.1 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      9: {
        range: '151.50 Hz',
        resolution: '0.1 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      10: {
        range: '200.00 Hz',
        resolution: '0.1 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      11: {
        range: '303.00 Hz',
        resolution: '0.1 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      12: {
        range: '606.10 Hz',
        resolution: '0.1 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      13: {
        range: '1.2500 kHz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'kHz',
      },
      14: {
        range: '1.6660 kHz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'kHz',
      },
      15: {
        range: '2.5000 kHz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'kHz',
      },
      16: {
        range: '5.0000 kHz',
        resolution: '0.0001 Hz',
        decimalplace: 1,
        unit: 'kHz',
      },
    },
  },
  0xa8: {
    label: 'Current DC',
    ranges: {
      1: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      2: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
      9: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      10: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
    },
  },
  0xa9: {
    label: 'Current AC',
    ranges: {
      1: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      2: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
      9: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      10: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
    },
  },
  0xaa: {
    label: 'Current AC+DC',
    ranges: {
      1: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      2: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
      9: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      10: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
    },
  },
  0xab: {
    label: 'Current AC',
    ranges: {
      1: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      2: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
      9: {
        range: '8A',
        resolution: '0.1mA',
        decimalplace: 1,
        unit: 'A',
      },
      10: {
        range: '20A',
        resolution: '1mA',
        decimalplace: 2,
        unit: 'A',
      },
    },
  },
  0xb0: {
    label: 'Current DC',
    ranges: {
      1: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      2: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
      9: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      10: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
    },
  },
  0xb1: {
    label: 'Current AC',
    ranges: {
      1: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      2: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
      9: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      10: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
    },
  },
  0xb2: {
    label: 'Current AC+DC',
    ranges: {
      1: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      2: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
      9: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      10: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
    },
  },
  0xb3: {
    label: 'Current AC',
    ranges: {
      1: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      2: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
      9: {
        range: '80mA',
        resolution: '1µA',
        decimalplace: 2,
        unit: 'mA',
      },
      10: {
        range: '800mA',
        resolution: '10µA',
        decimalplace: 3,
        unit: 'mA',
      },
    },
  },
  0xc0: {
    label: 'Temperature',
    ranges: {
      1: {
        range: '-50℃ ~ 1372℃',
        resolution: '0.1℃',
        decimalplace: 2,
        unit: '℃',
      },
    },
  },
  0xc1: {
    label: 'Temperature',
    ranges: {
      1: {
        range: '-50℃ ~ 1372℃',
        resolution: '0.1℃',
        decimalplace: 4,
        unit: '℃',
      },
    },
  },
  0xc8: {
    label: 'Capacitance',
    ranges: {
      1: {
        range: '1nF',
        resolution: '1pF',
        decimalplace: 1,
        unit: 'nF',
      },
      2: {
        range: '10nF',
        resolution: '10pF',
        decimalplace: 2,
        unit: 'nF',
      },
      3: {
        range: '100nF',
        resolution: '100pF',
        decimalplace: 3,
        unit: 'nF',
      },
      4: {
        range: '1uF',
        resolution: '1nF',
        decimalplace: 1,
        unit: 'uF',
      },
      5: {
        range: '10uF',
        resolution: '10nF',
        decimalplace: 2,
        unit: 'uF',
      },
      6: {
        range: '100uF',
        resolution: '100nF',
        decimalplace: 3,
        unit: 'uF',
      },
      9: {
        range: '1nF',
        resolution: '1pF',
        decimalplace: 1,
        unit: 'nF',
      },
      10: {
        range: '10nF',
        resolution: '10pF',
        decimalplace: 2,
        unit: 'nF',
      },
      11: {
        range: '100nF',
        resolution: '100pF',
        decimalplace: 3,
        unit: 'nF',
      },
      12: {
        range: '1uF',
        resolution: '1nF',
        decimalplace: 1,
        unit: 'uF',
      },
      13: {
        range: '10uF',
        resolution: '10nF',
        decimalplace: 2,
        unit: 'uF',
      },
      14: {
        range: '100uF',
        resolution: '100nF',
        decimalplace: 3,
        unit: 'uF',
      },
    },
  },
  0xd0: {
    label: 'Frequency',
    ranges: {
      1: {
        range: '10.0 MHz',
        resolution: '1 kHz',
        decimalplace: 2,
        unit: 'MHz',
      },
      2: {
        range: '100.0 MHz',
        resolution: '10 kHz',
        decimalplace: 3,
        unit: 'MHz',
      },
      3: {
        range: '1000.0 MHz',
        resolution: '100 kHz',
        decimalplace: 4,
        unit: 'MHz',
      },
      9: {
        range: '99.999 kHz',
        resolution: '1 Hz',
        decimalplace: 2,
        unit: 'kHz',
      },
      10: {
        range: '999.99 kHz',
        resolution: '10 Hz',
        decimalplace: 2,
        unit: 'kHz',
      },
      11: {
        range: '8.0000 MHz',
        resolution: '100 Hz',
        decimalplace: 1,
        unit: 'MHz',
      },
    },
  },
  0xd1: {
    label: 'Frequency',
    ranges: {
      1: {
        range: '999.99 Hz',
        resolution: '0.01 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      2: {
        range: '9.9999 kHz',
        resolution: '0.1 Hz',
        decimalplace: 1,
        unit: 'kHz',
      },
      3: {
        range: '99.999 kHz',
        resolution: '1 Hz',
        decimalplace: 2,
        unit: 'kHz',
      },
      4: {
        range: '999.99 kHz',
        resolution: '10 Hz',
        decimalplace: 2,
        unit: 'kHz',
      },
      5: {
        range: '8.0000 MHz',
        resolution: '100 Hz',
        decimalplace: 1,
        unit: 'MHz',
      },
      9: {
        range: '999.99 Hz',
        resolution: '0.01 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
      10: {
        range: '999.99 Hz',
        resolution: '0.01 Hz',
        decimalplace: 3,
        unit: 'Hz',
      },
    },
  },
  0xd2: {
    label: 'RPM',
    ranges: {
      1: {
        range: '99999 RPM',
        resolution: '1 RPM',
        decimalplace: 2,
        unit: 'RPM',
      },
      3: {
        range: '99999 RPM',
        resolution: '1000 RPM',
        decimalplace: 1,
        unit: 'k',
      },
    },
  },
  0xd8: {
    label: 'Diode/Continuity (Auto)',
    ranges: {
      1: {
        range: '0~3V',
        resolution: '0.0001 V',
        decimalplace: 1,
        unit: 'V',
      },
    },
  },
  0xe0: {
    label: 'Resistance',
    ranges: {
      1: {
        range: '800 Ω',
        resolution: '0.01 Ω',
        decimalplace: 3,
        unit: 'Ω',
      },
      2: {
        range: '8 kΩ',
        resolution: '0.1 Ω',
        decimalplace: 1,
        unit: 'kΩ',
      },
      3: {
        range: '80 kΩ',
        resolution: '1 Ω',
        decimalplace: 2,
        unit: 'kΩ',
      },
      4: {
        range: '800 kΩ',
        resolution: '10 Ω',
        decimalplace: 3,
        unit: 'kΩ',
      },
      5: {
        range: '8 MΩ',
        resolution: '100 Ω',
        decimalplace: 1,
        unit: 'MΩ',
      },
      6: {
        range: '80 MΩ',
        resolution: '1 kΩ',
        decimalplace: 2,
        unit: 'MΩ',
      },
      9: {
        range: '800 Ω',
        resolution: '0.01 Ω',
        decimalplace: 3,
        unit: 'Ω',
      },
      10: {
        range: '8 kΩ',
        resolution: '0.1 Ω',
        decimalplace: 1,
        unit: 'kΩ',
      },
      11: {
        range: '80 kΩ',
        resolution: '1 Ω',
        decimalplace: 2,
        unit: 'kΩ',
      },
      12: {
        range: '800 kΩ',
        resolution: '10 Ω',
        decimalplace: 3,
        unit: 'kΩ',
      },
      13: {
        range: '8 MΩ',
        resolution: '100 Ω',
        decimalplace: 1,
        unit: 'MΩ',
      },
      14: {
        range: '80 MΩ',
        resolution: '1 kΩ',
        decimalplace: 2,
        unit: 'MΩ',
      },
    },
  },
  0xe1: {
    label: 'Continuity',
    ranges: {
      1: {
        range: '50 Ω',
        resolution: '0.01 Ω',
        decimalplace: 3,
        unit: 'Ω',
      },
    },
  },
  0xe2: {
    label: 'High Resistance',
    ranges: {
      1: {
        range: '2000 Ω',
        resolution: '1 MΩ',
        decimalplace: 4,
        unit: 'MΩ',
      },
      5: {
        range: '2000 Ω',
        resolution: '1 MΩ',
        decimalplace: 4,
        unit: 'MΩ',
      },
    },
  },
  0xe8: {
    label: 'DCV',
    ranges: {
      1: {
        range: '80mV',
        resolution: '1µV',
        decimalplace: 2,
        unit: 'mV',
      },
      2: {
        range: '800mV',
        resolution: '10µV',
        decimalplace: 3,
        unit: 'mV',
      },
      9: {
        range: '80mV',
        resolution: '1µV',
        decimalplace: 2,
        unit: 'mV',
      },
      10: {
        range: '800mV',
        resolution: '10µV',
        decimalplace: 3,
        unit: 'mV',
      },
    },
  },
  0xe9: {
    label: 'VAC',
    ranges: {
      1: {
        range: '80mV',
        resolution: '1µV',
        decimalplace: 2,
        unit: 'mV',
      },
      2: {
        range: '800mV',
        resolution: '10µV',
        decimalplace: 3,
        unit: 'mV',
      },
      9: {
        range: '80mV',
        resolution: '1µV',
        decimalplace: 2,
        unit: 'mV',
      },
      10: {
        range: '800mV',
        resolution: '10µV',
        decimalplace: 3,
        unit: 'mV',
      },
    },
  },
  0xea: {
    label: 'DCV dBm',
    ranges: {
      1: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 2,
        unit: 'Hz',
      },
      9: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 3,
        unit: 'Hz',
      },
      10: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: null,
        unit: 'Ω',
      },
    },
  },
  0xf0: {
    label: 'DCV',
    ranges: {
      1: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      2: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      3: {
        range: '800V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      4: {
        range: '1000V',
        resolution: '0.1V',
        decimalplace: 4,
        unit: 'V',
      },
      9: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      10: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      11: {
        range: '800V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      12: {
        range: '1000V',
        resolution: '0.1V',
        decimalplace: 4,
        unit: 'V',
      },
    },
  },
  0xf1: {
    label: 'VAC+DCV',
    ranges: {
      1: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      2: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      3: {
        range: '800V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      4: {
        range: '1000V',
        resolution: '0.1V',
        decimalplace: 4,
        unit: 'V',
      },
      9: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      10: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      11: {
        range: '800V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      12: {
        range: '1000V',
        resolution: '0.1V',
        decimalplace: 4,
        unit: 'V',
      },
    },
  },
  0xf2: {
    label: 'DCV dBm',
    ranges: {
      1: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 2,
        unit: 'Hz',
      },
      9: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 3,
        unit: 'Hz',
      },
      10: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: null,
        unit: 'Ω',
      },
    },
  },
  0xf8: {
    label: 'VAC',
    ranges: {
      1: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      2: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      3: {
        range: '750V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      9: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      10: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      11: {
        range: '750V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
    },
  },
  0xf9: {
    label: 'VAC',
    ranges: {
      1: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      2: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      3: {
        range: '750V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
      9: {
        range: '8V',
        resolution: '0.1mV',
        decimalplace: 1,
        unit: 'V',
      },
      10: {
        range: '80V',
        resolution: '1mV',
        decimalplace: 2,
        unit: 'V',
      },
      11: {
        range: '750V',
        resolution: '10mV',
        decimalplace: 3,
        unit: 'V',
      },
    },
  },
  0xfa: {
    label: 'VAC dBM',
    ranges: {
      1: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 2,
        unit: 'Hz',
      },
      9: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: 3,
        unit: 'Hz',
      },
      10: {
        range: '-80.00dBm ~ +80.00dBm',
        resolution: '0.01dBm',
        decimalplace: null,
        unit: 'Ω',
      },
    },
  },
}

module.exports = {
  meterFunctions,
}
