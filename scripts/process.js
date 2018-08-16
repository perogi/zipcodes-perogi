#!/usr/bin/env node

const fs = require("fs"),
    path = require("path"),
    zips = {},
    data = fs.readFileSync("./USZipcodeAndTimezoneDataAug2018.csv", "utf8").replace(/\r/g, "").split("\n");

let str;
data.shift();


const clean = function (str) {
    return str.replace(/"/g, "").trimLeft();
};

data.forEach(function (line) {
    line = line.split(",");
    if (line.length > 1) {
        const o = {};

        o.zip = clean(line[0]);
        o.city = clean(line[1]);
        o.state = clean(line[3]);
        // o.latitude = clean(line[6]);
        // o.longitude = clean(line[7]);
        o.timeZoneId = clean(line[8]);

        if (!zips[o.zip]) {
            zips[o.zip] = o;
        }
    }
});

const stateMap = {};
let i;
for (i in zips) {
    const item = zips[i];
    stateMap[item.state] = stateMap[item.state] || [];

    stateMap[item.state].push(item.zip);
}

str = "exports.codes = " + JSON.stringify(zips) + ";\n";
str += "exports.stateMap = " + JSON.stringify(stateMap) + ";\n";

fs.writeFileSync(path.join("../", "lib", "codes.js"), str, "utf8");
