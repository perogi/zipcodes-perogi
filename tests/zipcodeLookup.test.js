const chai = require("chai");
const expect = chai.expect;
const zipcodes = require('../lib/index');

describe('zipcodes lookup tests', () => {

    it('gets the data for zipcode 03301', () => {
        const result = zipcodes.lookup("03301");
        expect(result.zip).to.equal("03301");
        expect(result.city).to.equal("Concord");
        expect(result.state).to.equal("NH");
        expect(result.timeZoneId).to.equal("America/New_York");
    });
});

describe('zipcodes timezone lookup tests', () => {

    it('gets the data for zipcode 03301', () => {
        const result = zipcodes.lookupWithTime("03301");
        expect(result.zip).to.equal("03301");
        expect(result.city).to.equal("Concord");
        expect(result.state).to.equal("NH");
        expect(result.timeZoneId).to.equal("America/New_York");
        expect(result.time).to.not.equal(undefined);
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