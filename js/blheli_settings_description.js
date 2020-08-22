'use strict';

// layout 33, 16.3, 16.4, 16.5 16.9
var BLHELI_S_SETTINGS_LAYOUT_33 = [
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escPWMFrequency',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 127 && settings.PPM_MAX_THROTTLE < 160),
        options: [
            { value: '', label: '24kHz' }, { value: '160', label: '48kHz' }, { value: '192', label: '96kHz' }
        ]
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escPWMFrequency',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 159 && settings.PPM_MAX_THROTTLE < 192),
        options: [
            { value: '', label: '48kHz' }, { value: '128', label: '24kHz' }, { value: '192', label: '96kHz' }
        ]
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escPWMFrequency',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 191 && settings.PPM_MAX_THROTTLE < 224),
        options: [
            { value: '', label: '96kHz' }, { value: '128', label: '24kHz' }, { value: '160', label: '48kHz' }
        ]
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escCe',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 127 && settings.PPM_MAX_THROTTLE < 160),
        options: [
            { value: '128', label: 'Async-PWM' }, { value: '129', label: '3%CE' }, { value: '130', label: '6%CE' }, { value: '131', label: '9%CE' },
            { value: '132', label: '12%CE' }, { value: '133', label: '15%CE' }, { value: '134', label: '18%CE' }, { value: '135', label: '21%CE' }, { value: '136', label: '24%CE' },
            { value: '137', label: '27%CE' }, { value: '138', label: '30%CE' }, { value: '139', label: '33%CE' }, { value: '140', label: '37%CE' }, { value: '141', label: '40%CE' },
            { value: '142', label: '44%CE' }, { value: '143', label: '47%CE' }, { value: '144', label: '50%CE' }, { value: '145', label: '53%CE' }, { value: '146', label: '56%CE' },
            { value: '147', label: '59%CE' }, { value: '148', label: '62%CE' }, { value: '149', label: '65%CE' }, { value: '150', label: '68%CE' }, { value: '151', label: '71%CE' },
            { value: '152', label: '74%CE' }, { value: '153', label: '77%CE' }, { value: '154', label: '80%CE' }, { value: '155', label: '83%CE' }, { value: '156', label: '86%CE' },
            { value: '157', label: '90%CE' }, { value: '158', label: '95%CE' }, { value: '159', label: '100%CE' }
        ]
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escCe',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 159 && settings.PPM_MAX_THROTTLE < 192),
        options: [
            { value: '160', label: 'Async-PWM' }, { value: '161', label: '3%CE' }, { value: '162', label: '6%CE' }, { value: '163', label: '9%CE' },
            { value: '164', label: '12%CE' }, { value: '165', label: '15%CE' }, { value: '166', label: '18%CE' }, { value: '167', label: '21%CE' }, { value: '168', label: '24%CE' },
            { value: '169', label: '27%CE' }, { value: '170', label: '30%CE' }, { value: '171', label: '33%CE' }, { value: '172', label: '37%CE' }, { value: '173', label: '40%CE' },
            { value: '174', label: '44%CE' }, { value: '175', label: '47%CE' }, { value: '176', label: '50%CE' }, { value: '177', label: '53%CE' }, { value: '178', label: '56%CE' },
            { value: '179', label: '59%CE' }, { value: '180', label: '62%CE' }, { value: '181', label: '65%CE' }, { value: '182', label: '68%CE' }, { value: '183', label: '71%CE' },
            { value: '184', label: '74%CE' }, { value: '185', label: '77%CE' }, { value: '186', label: '80%CE' }, { value: '187', label: '83%CE' }, { value: '188', label: '86%CE' },
            { value: '189', label: '90%CE' }, { value: '190', label: '95%CE' }, { value: '191', label: '100%CE' }
        ]
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'enum', label: 'escCe',
        visibleIf: settings => (settings.PPM_MAX_THROTTLE > 191 && settings.PPM_MAX_THROTTLE < 224),
        options: [
            { value: '192', label: 'Async-PWM' }, { value: '193', label: '3%CE' }, { value: '194', label: '6%CE' }, { value: '195', label: '9%CE' },
            { value: '196', label: '12%CE' }, { value: '197', label: '15%CE' }, { value: '198', label: '18%CE' }, { value: '199', label: '21%CE' }, { value: '200', label: '24%CE' },
            { value: '201', label: '27%CE' }, { value: '202', label: '30%CE' }, { value: '203', label: '33%CE' }, { value: '204', label: '37%CE' }, { value: '205', label: '40%CE' },
            { value: '206', label: '44%CE' }, { value: '207', label: '47%CE' }, { value: '208', label: '50%CE' }, { value: '209', label: '53%CE' }, { value: '210', label: '56%CE' },
            { value: '211', label: '59%CE' }, { value: '212', label: '62%CE' }, { value: '213', label: '65%CE' }, { value: '214', label: '68%CE' }, { value: '215', label: '71%CE' },
            { value: '216', label: '74%CE' }, { value: '217', label: '77%CE' }, { value: '218', label: '80%CE' }, { value: '219', label: '83%CE' }, { value: '220', label: '86%CE' },
            { value: '221', label: '90%CE' }, { value: '222', label: '95%CE' }, { value: '223', label: '100%CE' }
        ]
    },
    {
        name: 'PPM_MIN_THROTTLE', type: 'enum', label: 'escSyncEscFFBrake',
        options: [
            { value: '37', label: 'OFF' }, { value: '20', label: 'Low/Normal(25%)' }, { value: '21', label: 'Low/Normal(50%)' }, { value: '22', label: 'Low/Normal(75%)' },
            { value: '23', label: 'Low/Normal(100%)' }, { value: '24', label: 'Low/Double(25%)' }, { value: '25', label: 'Low/Double(50%)' }, { value: '26', label: 'Low/Double(75%)' },
            { value: '27', label: 'Low/Double(100%)' }, { value: '30', label: 'Medium/Normal(25%)' }, { value: '31', label: 'Medium/Normal(50%)' }, { value: '32', label: 'Medium/Normal(75%)' },
            { value: '33', label: 'Medium/Normal(100%)' }, { value: '34', label: 'Medium/Double(25%)' }, { value: '35', label: 'Medium/Double(50%)' }, { value: '36', label: 'Medium/Double(75%)' },
            { value: '40', label: 'Medium-High/Normal(25%)' }, { value: '41', label: 'Medium-High/Normal(50%)' }, { value: '42', label: 'Medium-High/Normal(75%)' }, { value: '43', label: 'Medium-High/Normal(100%)' },
            { value: '44', label: 'Medium-High/Double(25%)' }, { value: '45', label: 'Medium-High/Double(50%)' }, { value: '46', label: 'Medium-High/Double(75%)' }, { value: '47', label: 'Medium-High/Double(100%)' },
            { value: '50', label: 'High/Normal(25%)' }, { value: '51', label: 'High/Normal(50%)' }, { value: '52', label: 'High/Normal(75%)' }, { value: '53', label: 'High/Normal(100%)' },
            { value: '54', label: 'High/Double(25%)' }, { value: '55', label: 'High/Double(50%)' }, { value: '56', label: 'High/Double(75%)' }, { value: '57', label: 'High/Double(100%)' }
        ]
    },
    {
        name: 'PROGRAMMING_BY_TX', type: 'bool', label: 'escProgrammingByTX'
    },
    {
        name: 'STARTUP_POWER', type: 'enum', options: [
            { value: '1', label: '0.031' }, { value: '2', label: '0.047' },
            { value: '3', label: '0.063' }, { value: '4', label: '0.094' },
            { value: '5', label: '0.125' }, { value: '6', label: '0.188' },
            { value: '7', label: '0.25' }, { value: '8', label: '0.38' },
            { value: '9', label: '0.50' }, { value: '10', label: '0.75' },
            { value: '11', label: '1.00' }, { value: '12', label: '1.25' },
            { value: '13', label: '1.50' }
        ],
        label: 'escStartupPower'
    },
    {
        name: 'TEMPERATURE_PROTECTION', type: 'enum', label: 'escTemperatureProtection',
        options: [
            { value: '0', label: 'Disabled' }, { value: '1', label: '80C' },
            { value: '2', label: '90 C' }, { value: '3', label: '100 C' },
            { value: '4', label: '110 C' }, { value: '5', label: '120 C' },
            { value: '6', label: '130 C' }, { value: '7', label: '140 C' }
        ]
    },
    {
        name: 'LOW_RPM_POWER_PROTECTION', type: 'bool', label: 'escLowRPMPowerProtection'
    },
    {
        name: 'BRAKE_ON_STOP', type: 'bool', label: 'escBrakeOnStop'
    },
    {
        name: 'DEMAG_COMPENSATION', type: 'enum', label: 'escDemagCompensation',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'High' }
        ]
    },
    {
        name: 'COMMUTATION_TIMING', type: 'enum', label: 'escMotorTiming',
        options: [
            { value: '1', label: 'Low' }, { value: '2', label: 'MediumLow' },
            { value: '3', label: 'Medium' }, { value: '4', label: 'MediumHigh' },
            { value: '5', label: 'High' }
        ]
    },
    {
        name: 'BEEP_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeepStrength'
    },
    {
        name: 'BEACON_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeaconStrength'
    },
    {
        name: 'BEACON_DELAY', type: 'enum', label: 'escBeaconDelay',
        options: [
            { value: '1', label: '1 minute' }, { value: '2', label: '2 minutes' },
            { value: '3', label: '5 minutes' }, { value: '4', label: '10 minutes' },
            { value: '5', label: 'Infinite' }
        ]
    }
];

// layout 32, 16.0, 16.1, 16.2
var BLHELI_S_SETTINGS_LAYOUT_32 = [
    {
        name: 'PROGRAMMING_BY_TX', type: 'bool', label: 'escProgrammingByTX'
    },
    {
        name: 'STARTUP_POWER', type: 'enum', options: [
            { value: '1', label: '0.031' }, { value: '2', label: '0.047' },
            { value: '3', label: '0.063' }, { value: '4', label: '0.094' },
            { value: '5', label: '0.125' }, { value: '6', label: '0.188' },
            { value: '7', label: '0.25' }, { value: '8', label: '0.38' },
            { value: '9', label: '0.50' }, { value: '10', label: '0.75' },
            { value: '11', label: '1.00' }, { value: '12', label: '1.25' },
            { value: '13', label: '1.50' }
        ],
        label: 'escStartupPower'
    },
    {
        name: 'TEMPERATURE_PROTECTION', type: 'bool', label: 'escTemperatureProtection'
    },
    {
        name: 'LOW_RPM_POWER_PROTECTION', type: 'bool', label: 'escLowRPMPowerProtection'
    },
    {
        name: 'BRAKE_ON_STOP', type: 'bool', label: 'escBrakeOnStop'
    },
    {
        name: 'DEMAG_COMPENSATION', type: 'enum', label: 'escDemagCompensation',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'High' }
        ]
    },
    {
        name: 'COMMUTATION_TIMING', type: 'enum', label: 'escMotorTiming',
        options: [
            { value: '1', label: 'Low' }, { value: '2', label: 'MediumLow' },
            { value: '3', label: 'Medium' }, { value: '4', label: 'MediumHigh' },
            { value: '5', label: 'High' }
        ]
    },
    {
        name: 'BEEP_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeepStrength'
    },
    {
        name: 'BEACON_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeaconStrength'
    },
    {
        name: 'BEACON_DELAY', type: 'enum', label: 'escBeaconDelay',
        options: [
            { value: '1', label: '1 minute' }, { value: '2', label: '2 minutes' },
            { value: '3', label: '5 minutes' }, { value: '4', label: '10 minutes' },
            { value: '5', label: 'Infinite' }
        ]
    }
];

// layout 21, 14.5, 14.6, 14.7
var BLHELI_MULTI_SETTINGS_LAYOUT_21 = [
    {
        name: 'PROGRAMMING_BY_TX', type: 'bool', label: 'escProgrammingByTX'
    },
    {
        name: 'GOVERNOR_MODE', type: 'enum', label: 'escClosedLoopMode',
        options: [
            { value: '1', label: 'HiRange' }, { value: '2', label: 'MidRange' },
            { value: '3', label: 'LoRange' }, { value: '4', label: 'Off' }
        ]
    },
    {
        name: 'P_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopPGain'
    },
    {
        name: 'I_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopIGain'
    },
    {
        name: 'MOTOR_GAIN', type: 'enum', options: [
            { value: '1', label: '0.75' }, { value: '2', label: '0.88' },
            { value: '3', label: '1.00' }, { value: '4', label: '1.12' },
            { value: '5', label: '1.25' }
        ],
        label: 'escMotorGain'
    },
    {
        name: 'STARTUP_POWER', type: 'enum', options: [
            { value: '1', label: '0.031' }, { value: '2', label: '0.047' },
            { value: '3', label: '0.063' }, { value: '4', label: '0.094' },
            { value: '5', label: '0.125' }, { value: '6', label: '0.188' },
            { value: '7', label: '0.25' }, { value: '8', label: '0.38' },
            { value: '9', label: '0.50' }, { value: '10', label: '0.75' },
            { value: '11', label: '1.00' }, { value: '12', label: '1.25' },
            { value: '13', label: '1.50' }
        ],
        label: 'escStartupPower'
    },
    {
        name: 'TEMPERATURE_PROTECTION', type: 'bool', label: 'escTemperatureProtection'
    },
    {
        name: 'PWM_DITHER', type: 'enum', label: 'escPWMOutputDither',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: '3' },
            { value: '3', label: '7' }, { value: '4', label: '15' },
            { value: '5', label: '31' }
        ]
    },
    {
        name: 'LOW_RPM_POWER_PROTECTION', type: 'bool', label: 'escLowRPMPowerProtection'
    },
    {
        name: 'BRAKE_ON_STOP', type: 'bool', label: 'escBrakeOnStop'
    },
    {
        name: 'DEMAG_COMPENSATION', type: 'enum', label: 'escDemagCompensation',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'High' }
        ]
    },
    {
        name: 'PWM_FREQUENCY', type: 'enum', label: 'escPWMFrequencyDamped',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'DampedLight' }
        ]
    },
    {
        name: 'PWM_INPUT', type: 'bool', label: 'escEnablePWMInput'
    },
    {
        name: 'COMMUTATION_TIMING', type: 'enum', label: 'escMotorTiming',
        options: [
            { value: '1', label: 'Low' }, { value: '2', label: 'MediumLow' },
            { value: '3', label: 'Medium' }, { value: '4', label: 'MediumHigh' },
            { value: '5', label: 'High' }
        ]
    },
    {
        name: 'INPUT_PWM_POLARITY', type: 'enum', label: 'escInputPolarity',
        options: [
            { value: '1', label: 'Positive' }, { value: '2', label: 'Negative' }
        ]
    },
    {
        name: 'BEEP_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeepStrength'
    },
    {
        name: 'BEACON_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeaconStrength'
    },
    {
        name: 'BEACON_DELAY', type: 'enum', label: 'escBeaconDelay',
        options: [
            { value: '1', label: '1 minute' }, { value: '2', label: '2 minutes' },
            { value: '3', label: '5 minutes' }, { value: '4', label: '10 minutes' },
            { value: '5', label: 'Infinite' }
        ]
    }
];

// layout 20, 14.0, 14.1, 14.2, 14.3, 14.4
var BLHELI_MULTI_SETTINGS_LAYOUT_20 = [
    {
        name: 'PROGRAMMING_BY_TX', type: 'bool', label: 'escProgrammingByTX'
    },
    {
        name: 'GOVERNOR_MODE', type: 'enum', label: 'escClosedLoopMode',
        options: [
            { value: '1', label: 'HiRange' }, { value: '2', label: 'MidRange' },
            { value: '3', label: 'LoRange' }, { value: '4', label: 'Off' }
        ]
    },
    {
        name: 'P_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopPGain'
    },
    {
        name: 'I_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopIGain'
    },
    {
        name: 'MOTOR_GAIN', type: 'enum', options: [
            { value: '1', label: '0.75' }, { value: '2', label: '0.88' },
            { value: '3', label: '1.00' }, { value: '4', label: '1.12' },
            { value: '5', label: '1.25' }
        ],
        label: 'escMotorGain'
    },
    {
        name: 'STARTUP_POWER', type: 'enum', options: [
            { value: '1', label: '0.031' }, { value: '2', label: '0.047' },
            { value: '3', label: '0.063' }, { value: '4', label: '0.094' },
            { value: '5', label: '0.125' }, { value: '6', label: '0.188' },
            { value: '7', label: '0.25' }, { value: '8', label: '0.38' },
            { value: '9', label: '0.50' }, { value: '10', label: '0.75' },
            { value: '11', label: '1.00' }, { value: '12', label: '1.25' },
            { value: '13', label: '1.50' }
        ],
        label: 'escStartupPower'
    },
    {
        name: 'TEMPERATURE_PROTECTION', type: 'bool', label: 'escTemperatureProtection'
    },
    {
        name: 'PWM_DITHER', type: 'enum', label: 'escPWMOutputDither',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: '7' },
            { value: '3', label: '15' }, { value: '4', label: '31' },
            { value: '5', label: '63' }
        ]
    },
    {
        name: 'LOW_RPM_POWER_PROTECTION', type: 'bool', label: 'escLowRPMPowerProtection'
    },
    {
        name: 'DEMAG_COMPENSATION', type: 'enum', label: 'escDemagCompensation',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'High' }
        ]
    },
    {
        name: 'PWM_FREQUENCY', type: 'enum', label: 'escPWMFrequencyDamped',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'DampedLight' }
        ]
    },
    {
        name: 'PWM_INPUT', type: 'bool', label: 'escEnablePWMInput'
    },
    {
        name: 'COMMUTATION_TIMING', type: 'enum', label: 'escMotorTiming',
        options: [
            { value: '1', label: 'Low' }, { value: '2', label: 'MediumLow' },
            { value: '3', label: 'Medium' }, { value: '4', label: 'MediumHigh' },
            { value: '5', label: 'High' }
        ]
    },
    {
        name: 'INPUT_PWM_POLARITY', type: 'enum', label: 'escInputPolarity',
        options: [
            { value: '1', label: 'Positive' }, { value: '2', label: 'Negative' }
        ]
    },
    {
        name: 'BEEP_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeepStrength'
    },
    {
        name: 'BEACON_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeaconStrength'
    },
    {
        name: 'BEACON_DELAY', type: 'enum', label: 'escBeaconDelay',
        options: [
            { value: '1', label: '1 minute' }, { value: '2', label: '2 minutes' },
            { value: '3', label: '5 minutes' }, { value: '4', label: '10 minutes' },
            { value: '5', label: 'Infinite' }
        ]
    }
];

// layout 19, 13.2
var BLHELI_MULTI_SETTINGS_LAYOUT_19 = [
    {
        name: 'PROGRAMMING_BY_TX', type: 'bool', label: 'escProgrammingByTX'
    },
    {
        name: 'GOVERNOR_MODE', type: 'enum', label: 'escClosedLoopMode',
        options: [
            { value: '1', label: 'HiRange' }, { value: '2', label: 'MidRange' },
            { value: '3', label: 'LoRange' }, { value: '4', label: 'Off' }
        ]
    },
    {
        name: 'P_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopPGain'
    },
    {
        name: 'I_GAIN', type: 'enum', options: [
            { value: '1', label: '0.13' }, { value: '2', label: '0.17' },
            { value: '3', label: '0.25' }, { value: '4', label: '0.38' },
            { value: '5', label: '0.50' }, { value: '6', label: '0.75' },
            { value: '7', label: '1.00' }, { value: '8', label: '1.50' },
            { value: '9', label: '2.00' }, { value: '10', label: '3.00' },
            { value: '11', label: '4.00' }, { value: '12', label: '6.00' },
            { value: '13', label: '8.00' }
        ],
        visibleIf: settings => settings.GOVERNOR_MODE !== 4,
        label: 'escClosedLoopIGain'
    },
    {
        name: 'LOW_VOLTAGE_LIMIT', type: 'enum', options: [
            { value: '1', label: 'Off' }, { value: '2', label: '3.0V/c' },
            { value: '3', label: '3.1V/c' }, { value: '4', label: '3.2V/c' },
            { value: '5', label: '3.3V/c' }, { value: '6', label: '3.4V/c' }
        ],
        label: 'escLowVoltageLimit'
    },
    {
        name: 'MOTOR_GAIN', type: 'enum', options: [
            { value: '1', label: '0.75' }, { value: '2', label: '0.88' },
            { value: '3', label: '1.00' }, { value: '4', label: '1.12' },
            { value: '5', label: '1.25' }
        ],
        label: 'escMotorGain'
    },
    {
        name: 'STARTUP_POWER', type: 'enum', options: [
            { value: '1', label: '0.031' }, { value: '2', label: '0.047' },
            { value: '3', label: '0.063' }, { value: '4', label: '0.094' },
            { value: '5', label: '0.125' }, { value: '6', label: '0.188' },
            { value: '7', label: '0.25' }, { value: '8', label: '0.38' },
            { value: '9', label: '0.50' }, { value: '10', label: '0.75' },
            { value: '11', label: '1.00' }, { value: '12', label: '1.25' },
            { value: '13', label: '1.50' }
        ],
        label: 'escStartupPower'
    },
    {
        name: 'TEMPERATURE_PROTECTION', type: 'bool', label: 'escTemperatureProtection'
    },
    {
        name: 'DEMAG_COMPENSATION', type: 'enum', label: 'escDemagCompensation',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'High' }
        ]
    },
    {
        name: 'PWM_FREQUENCY', type: 'enum', label: 'escPWMFrequencyDamped',
        options: [
            { value: '1', label: 'Off' }, { value: '2', label: 'Low' },
            { value: '3', label: 'DampedLight' }
        ]
    },
    {
        name: 'COMMUTATION_TIMING', type: 'enum', label: 'escMotorTiming',
        options: [
            { value: '1', label: 'Low' }, { value: '2', label: 'MediumLow' },
            { value: '3', label: 'Medium' }, { value: '4', label: 'MediumHigh' },
            { value: '5', label: 'High' }
        ]
    },
    {
        name: 'BEEP_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeepStrength'
    },
    {
        name: 'BEACON_STRENGTH', type: 'number', min: 1, max: 255, step: 1, label: 'escBeaconStrength'
    },
    {
        name: 'BEACON_DELAY', type: 'enum', label: 'escBeaconDelay',
        options: [
            { value: '1', label: '1 minute' }, { value: '2', label: '2 minutes' },
            { value: '3', label: '5 minutes' }, { value: '4', label: '10 minutes' },
            { value: '5', label: 'Infinite' }
        ]
    }
];

var BLHELI_SETTINGS_DESCRIPTIONS = {
    // BLHeli_S
    '33': {
        MULTI: {
            base: BLHELI_S_SETTINGS_LAYOUT_33
        },
        // There is no MAIN nor MULTI mode in BLHeli_S, added for completeness
        MAIN: {
            base: []
        },
        TAIL: {
            base: []
        }
    },
    '32': {
        MULTI: {
            base: BLHELI_S_SETTINGS_LAYOUT_32
        },
        // There is no MAIN nor MULTI mode in BLHeli_S, added for completeness
        MAIN: {
            base: []
        },
        TAIL: {
            base: []
        }
    },

    // BLHeli
    '21': {
        MULTI: {
            base: BLHELI_MULTI_SETTINGS_LAYOUT_21,
            overrides: {
                '14.5': [
                    {
                        name: 'PWM_DITHER', type: 'enum', label: 'escPWMOutputDither',
                        options: [
                            { value: '1', label: 'Off' }, { value: '2', label: '7' },
                            { value: '3', label: '15' }, { value: '4', label: '31' },
                            { value: '5', label: '63' }
                        ]
                    }
                ],
            }
        },
        MAIN: {
            base: []
        },
        TAIL: {
            base: []
        }
    },

    '20': {
        MULTI: {
            base: BLHELI_MULTI_SETTINGS_LAYOUT_20,
            overrides: {
                '14.0': [
                    {
                        name: 'PWM_DITHER', type: 'enum', label: 'escPWMOutputDither',
                        options: [
                            { value: '1', label: '1' }, { value: '2', label: '3' },
                            { value: '3', label: '7' }, { value: '4', label: '15' },
                            { value: '5', label: '31' }
                        ]
                    }
                ]
            }
        },
        MAIN: {
            base: []
        },
        TAIL: {
            base: []
        }
    },

    '19': {
        MULTI: {
            base: BLHELI_MULTI_SETTINGS_LAYOUT_19
        },
        MAIN: {
            base: []
        },
        TAIL: {
            base: []
        }
    }
};

// @todo add validation for min/max throttle
var BLHELI_S_INDIVIDUAL_SETTINGS = [
    {
        name: 'MOTOR_DIRECTION', type: 'enum', label: 'escMotorDirection',
        options: [
            { value: '1', label: 'Normal' }, { value: '2', label: 'Reversed' },
            { value: '3', label: 'Bidirectional' }, { value: '4', label: 'Bidirectional Reversed' }
        ]
    }
];

var BLHELI_INDIVIDUAL_SETTINGS = [
    {
        name: 'MOTOR_DIRECTION', type: 'enum', label: 'escMotorDirection',
        options: [
            { value: '1', label: 'Normal' }, { value: '2', label: 'Reversed' },
            { value: '3', label: 'Bidirectional' }
        ]
    },
    {
        name: 'PPM_MIN_THROTTLE', type: 'number', min: 1000, max: 1500, step: 4, label: 'escPPMMinThrottle',
        offset: 1000, factor: 4, suffix: ' μs'
    },
    {
        name: 'PPM_MAX_THROTTLE', type: 'number', min: 1504, max: 2020, step: 4, label: 'escPPMMaxThrottle',
        offset: 1000, factor: 4, suffix: ' μs'
    },
    {
        name: 'PPM_CENTER_THROTTLE', type: 'number', min: 1000, max: 2020, step: 4, label: 'escPPMCenterThrottle',
        offset: 1000, factor: 4, suffix: ' μs',
        visibleIf: settings => settings.MOTOR_DIRECTION === 3
    }
];

var BLHELI_INDIVIDUAL_SETTINGS_DESCRIPTIONS = {
    // BLHeli_S
    '33': {
        base: BLHELI_S_INDIVIDUAL_SETTINGS
    },
    '32': {
        base: BLHELI_S_INDIVIDUAL_SETTINGS
    },

    // BLHeli
    '21': {
        base: BLHELI_INDIVIDUAL_SETTINGS
    },
    '20': {
        base: BLHELI_INDIVIDUAL_SETTINGS
    },
    '19': {
        base: BLHELI_INDIVIDUAL_SETTINGS
    }
};

// @todo reconsinder, I don't like coupling between UI and underlying settings and versioning
function blheliCanMigrate(settingName, fromSettings, toSettings) {
    if (fromSettings.MODE === BLHELI_MODES.MULTI && toSettings.MODE === BLHELI_MODES.MULTI) {
        var fromCommons = BLHELI_SETTINGS_DESCRIPTIONS[fromSettings.LAYOUT_REVISION].MULTI.base,
            toCommons = BLHELI_SETTINGS_DESCRIPTIONS[toSettings.LAYOUT_REVISION].MULTI.base;

        var fromCommon = fromCommons.find(setting => setting.name === settingName),
            toCommon = toCommons.find(setting => setting.name === settingName);

        if (fromCommon && toCommon) {
            return true;
        }

        var fromIndividuals = BLHELI_INDIVIDUAL_SETTINGS_DESCRIPTIONS[fromSettings.LAYOUT_REVISION].base,
            toIndividuals = BLHELI_INDIVIDUAL_SETTINGS_DESCRIPTIONS[toSettings.LAYOUT_REVISION].base;

        var fromIndividual = fromIndividuals.find(setting => setting.name === settingName),
            toIndividual = toIndividuals.find(setting => setting.name === settingName);

        if (fromIndividual && toIndividual) {
            return true;
        }
    }

    return false;
}
