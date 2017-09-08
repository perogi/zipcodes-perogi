const chai = require("chai");
const expect = chai.expect;
const zipcodes = require('../lib/index');

describe('zipcode lookup tests', () => {

    it('gets the data for zipcode 03301', () => {
        const result = zipcodes.lookup("90210");
        expect(result.zip).to.equal("90210");
        expect(result.city).to.equal("Beverly Hills");
        expect(result.state).to.equal("CA");
        expect(result.timeZoneId).to.equal("America/Los_Angeles");
    });

    it(' a bad zipcode is sent in', () => {
        const result = zipcodes.lookup("ABCDE");
        expect(result).to.equal(undefined);
    });

    it(' an invalid but numeric zipcode is sent in', () => {
        const result = zipcodes.lookup("63464");
        expect(result).to.equal(undefined);
    });

    it(' no zipcode is sent in', () => {
        const result = zipcodes.lookup("");
        console.log(result);
        expect(result).to.equal(undefined);
    });

    it(' undefined zipcode is sent in', () => {
        const result = zipcodes.lookup(undefined);
        expect(result).to.equal(undefined);
    });
});

describe('zipcode timezone lookup tests', () => {

    it('gets the data for zipcode 03301', () => {
        const result = zipcodes.lookupWithTime("03301");
        expect(result.zip).to.equal("03301");
        expect(result.city).to.equal("Concord");
        expect(result.state).to.equal("NH");
        expect(result.timeZoneId).to.equal("America/New_York");
        expect(result.time).to.not.equal(undefined);
    });

    it(' a bad zipcode is sent in', () => {
        const result = zipcodes.lookupWithTime("ABCDE");
        expect(result).to.equal(undefined);
    });

    it(' an invalid but numeric zipcode is sent in', () => {
        const result = zipcodes.lookupWithTime("01465");
        expect(result).to.equal(undefined);
    });

    it(' no zipcode is sent in', () => {
        const result = zipcodes.lookupWithTime("");
        console.log(result);
        expect(result).to.equal(undefined);
    });

    it(' undefined zipcode is sent in', () => {
        const result = zipcodes.lookupWithTime(undefined);
        expect(result).to.equal(undefined);
    });
});


describe('lookup zipcodes by city, state tests', () => {
    it("should find by a valid city and state", () => {
        let l = zipcodes.lookupByName("Concord", "nH");
        expect(l.length).to.equal(4);

        l = zipcodes.lookupByName("Marion", "Illinois");
        expect(l.length).to.equal(1);

        l = zipcodes.lookupByName("Cupertino", "CA");
        expect(l.length).to.equal(2);

        l = zipcodes.lookupByName("New York", "New York");
        expect(l.length).to.equal(145);

        l = zipcodes.lookupByName("New York", "NY");
        expect(l.length).to.equal(145);
    });

    it("should not find by blank city", () => {
        l = zipcodes.lookupByName("", "MA");
        expect(l.length).to.equal(0);
    });

    it("should not find by blank state", () => {
        l = zipcodes.lookupByName("Boston", "");
        expect(l.length).to.equal(0);
    });

    it("should not find by undefined city", () => {
        l = zipcodes.lookupByName(undefined, "MA");
        expect(l.length).to.equal(0);
    });

    it("should not find by undefined state", () => {
        l = zipcodes.lookupByName("Boston", undefined);
        expect(l.length).to.equal(0);
    });
});

describe('lookup cities by state tests', () => {
    it("should find by a valid state abbreviation", () => {
        let l = zipcodes.lookupByState("NH");
        expect(l.length).to.equal(281);

        l = zipcodes.lookupByState("nh");
        expect(l.length).to.equal(281);
    });

    it("should not find using an invalid state abbreviation", () => {
        l = zipcodes.lookupByState("foobar");
        expect(l.length).to.equal(0);
    });

    it("should not find using a blank state abbreviation", () => {
        l = zipcodes.lookupByState("");
        expect(l.length).to.equal(0);
    });

    it("should not find using an undefined state abbreviation", () => {
        l = zipcodes.lookupByState(undefined);
        expect(l.length).to.equal(0);
    });
});