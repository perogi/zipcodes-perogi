#Zip Code Lookup
[![Build Status](https://travis-ci.org/perogi/zipcodes-perogi.svg?branch=master)](https://travis-ci.org/perogi/zipcodes-perogi)

A localized (flatfile) zipcode lookup.

**Sadly the development of this API has been postponed due to the increase in price to get an updated zipcode list on a monthly basis.**
I'm currently coding a solution that will use a free zip code lookup tool to pull in the data. I hope to finish this up during the Christmas break.  Thanks!

Zipcode data is taken from a new more up-to-date zipcode source compared to [davglass'](https://github.com/davglass/zipcodes) project. 
This source has monthly updates for zip code data. For example: June 2019 data added 2 zip codes.

## Other Differences
This application only has the default zip code information and only for the 50 US states and Washington, DC.  

## Last Change Log
Version 1.3.201908
1 change from July 2019 - Removal of one zipcode
npm audit: found 0 vulnerabilities 
Stryker mutation tests.  Passed 100.0  0 Survived

## Usage
    var zipcodes = require('zipcodes-perogi');

## Zipcode Lookup
    const hills = zipcodes.lookup(90210);  
      
    response:
    {
      "zip": "90210",
      "city": "Beverly Hills",
      "state": "CA",
      "latitude": "34.096629",
      "longitude": "-118.412426",
      "timeZoneId": "America/Los_Angeles"
    }

## Zipcode LookupWithTime
    const hills = zipcodes.lookupWithTime(03301);  
      
    response:
    {
      "zip": "03301",
      "city": "Concord",
      "state": "NH",
      "latitude": "43.23876",
      "longitude": "-71.511",
      "timeZoneId": "America/New_York",
      "time": "2019-05-03T22:15:05-04:00"
    }

## Lookup By Name
    const l = zipcodes.lookupByName('Concord', 'NH');  
      
    //Always returns an array, since cities can have multiple zip codes
    response: 
    [ 
        {
          "zip": "03301",
          "city": "Concord",
          "state": "NH",
          "latitude": "43.23876",
          "longitude": "-71.511",
          "timeZoneId": "America/New_York"
        },
        {
          "zip": "03302",
          "city": "Concord",
          "state": "NH",
          "latitude": "43.23387",
          "longitude": "-71.55967",
          "timeZoneId": "America/New_York"
        },
        {
          "zip": "03303",
          "city": "Concord",
          "state": "NH",
          "latitude": "43.30368",
          "longitude": "-71.6385",
          "timeZoneId": "America/New_York"
        },
        {
          "zip": "03305",
          "city": "Concord",
          "state": "NH",
          "latitude": "43.206116",
          "longitude": "-71.539058",
          "timeZoneId": "America/New_York"
        }
     ]
     
## Lookup By State
    const l = zipcodes.lookupByState('NH');
      
    //response would be an array of cities with corresponding data
    [ 
        {
          "zip": "03031",
          "city": "Amherst",
          "state": "NH",
          "latitude": "42.860306",
          "longitude": "-71.608545",
          "timeZoneId": "America/New_York"
        },
        {
          "zip": "03032",
          "city": "Auburn",
          "state": "NH",
          "latitude": "42.997422",
          "longitude": "-71.35159",
          "timeZoneId": "America/New_York"
        },
        {
          "zip": "03033",
          "city": "Brookline",
          "state": "NH",
          "latitude": "42.739053",
          "longitude": "-71.677821",
          "timeZoneId": "America/New_York"
        }
     ...
     ]


The original CSV file that I am using for this data is not included in this repo due to licensing, but I did wrap up
the best way to get the data and how to convert it into the format that this module uses.

Note: This is a fork of [davglass' excellent zipcode lookup project](https://github.com/davglass/zipcodes).

## Historical Change Log
See CHANGE_LOG.md file
