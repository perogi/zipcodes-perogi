const codesUS = require('./codes'),
    states = require('./states'),
    timezone = require('moment-timezone');

exports.states = states;
exports.codes = codesUS.codes;

const lookup = function (zip) {
    return codesUS.codes[zip];
};

exports.lookup = lookup;

const withTime = function (zip) {
    const info = codesUS.codes[zip];
    if (info && info.timeZoneId) {
        info.time = timezone.tz(info.timeZoneId).format();
    }
    return info;
};

exports.lookupWithTime = withTime;

const byName = function (city, state) {
    const ret = [];
    if (city) {
        city = city.toUpperCase();


        byState(state).forEach(function (item) {
            if (city === item.city.toUpperCase()) {
                ret.push(item);
            }
        });
    }

    return ret;
};

exports.lookupByName = byName;

const byState = function (state) {
    const ret = [];

    if (state) {
        state = states.normalize(state.toUpperCase());


        if (!codesUS.stateMap[state]) {
            return ret;
        }

        codesUS.stateMap[state].forEach(function (zip) {
            ret.push(codesUS.codes[zip]);
        });
    }

    return ret;
};

exports.lookupByState = byState;
