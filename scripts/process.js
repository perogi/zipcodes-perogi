#!/usr/bin/env node

const fs = require("fs"),
    path = require("path"),
    zips = {},
    data = fs.readFileSync("./zipcodedata.csv", "utf8").replace(/\r/g, "").split("\n");
let  str;
data.shift();


const clean = function(str) {
    return str.replace(/"/g, "").trimLeft();
};

const ucfirst = function(str) {
    str = str.toLowerCase();
    const lines = str.split(" ");
    lines.forEach(function(s, i) {
        const firstChar      = s.charAt(0),
            upperFirstChar = firstChar.toUpperCase();

        lines[i] = upperFirstChar + s.substring(1);

    });
    return lines.join(" ");
};

data.forEach(function(line) {
    line = line.split(",");
    if (line.length > 1) {
        const o = {};

        o.zip = clean(line[0]);
        o.city = clean(line[2]);
        o.state = clean(line[4]);
        o.timezone = clean(line[5]);
        o.utc = clean(line[6]);
        o.dst = clean(line[7]);
        o.latitude = clean(line[8]);
        o.longitude = clean(line[9]);

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
