const chai = require("chai");
const expect = chai.expect;

const zip03301 = {
    zip: '03301',
    city: 'Concord',
    state: 'NH',
    stateName: 'New Hampshire',
    timezone: 'Eastern',
    timezoneShort: 'EST',
    offset: '-5',
    dstObserved: 'Y',
    latitude: "43.23876",
    longitude: "-71.511"
};
const zipcodes = require('../lib/index');

describe('zipcodes lookup tests', () => {

    it('gets the data for zipcode 03301', () => {
        const result = zipcodes.lookup("03301");
        expect(result).to.deep.equal(zip03301);
    });
});

describe('lookup zipcodes by city, state tests', () => {
    it("should find by city and state", () => {
        let l = zipcodes.lookupByName("Marion", "il");
        expect(l.length).to.equal(1);

        l = zipcodes.lookupByName("Marion", "Illinois");
        expect(l.length).to.equal(1);

        l = zipcodes.lookupByName("Cupertino", "CA");
        expect(l.length).to.equal(2);

        l = zipcodes.lookupByName("New York", "New York");
        expect(l.length).to.equal(145);

        l = zipcodes.lookupByName("New York", "NY");
        expect(l.length).to.equal(145);
    });
});

describe('lookup cities by state tests', () => {
    it("should find by state abbreviation", () => {
        let l = zipcodes.lookupByState("RI");
        expect(l.length).to.equal(90);

        l = zipcodes.lookupByState("ri");
        expect(l.length).to.equal(90);

        l = zipcodes.lookupByState("foobar");
        expect(l.length).to.equal(0);
    });
});