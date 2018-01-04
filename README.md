#Zip Code Lookup
[![Build Status](https://travis-ci.org/perogi/zipcodes-perogi.svg?branch=master)](https://travis-ci.org/perogi/zipcodes-perogi)

A localized (flatfile) zipcode lookup.

Zipcode data is taken from a new more up-to-date source compared to [davglass'](https://github.com/davglass/zipcodes) project. 
This source has monthly updates for zip code data. For example: September 2017 data removed 7 zip codes that are no longer used.

## Other Differences
This application only has the default zip code information and only for the 50 US states and Washington, DC.  

## Last Change Log
Version 1.3.201801 minor updates to the data.

## Usage
    var zipcodes = require('zipcodes-perogi');

## Zipcode Lookup
    const hills = zipcodes.lookup(90210);  
      
    response:
    { 
        zip: '90210',
        city: 'Beverly Hills',
        state: 'CA',
        timeZoneId: 'America/Los_Angeles'
    }

## Zipcode LookupWithTime
    const hills = zipcodes.lookupWithTime(03301);  
      
    response:
    { 
        zip: '03301',
        city:'Concord',
        state:'NH',
        timeZoneId:'America/New_York',
        time:'2017-09-08T00:19:17-04:00'
    }


## Lookup By Name
    const l = zipcodes.lookupByName('Concord', 'NH');  
      
    //Always returns an array, since cities can have multiple zip codes
    response: 
    [ 
        { 
            zip: '03301',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York"
        },
        { 
            zip: '03302',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York"
        },
        { 
            zip: '03303',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York" 
        } ,
        { 
            zip: '03305',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York"
        } 
     ]
     
## Lookup By State
    const l = zipcodes.lookupByState('NH');
      
    //response would be an array of cities with corresponding data
    [ 
        { 
            zip: '03031',
            city: 'Amherst',
            state: 'NH',
            timeZoneId: 'America/New_York"
        },
        { 
            zip: '03032',
            city: 'Auburn',
            state: 'NH',
            timeZoneId: 'America/New_York"
        },
     ...
     ]


The original CSV file that I am using for this data is not included in this repo due to licensing, but I did wrap up
the best way to get the data and how to convert it into the format that this module uses.

Note: This is a fork of [davglass' excellent zipcode lookup project](https://github.com/davglass/zipcodes).

## Historical Change Log
Version 1.3.201712 very minor updates to the data.

Version 1.3.201711 very minor updates to the data.

Version 1.3.201710 minor updates to the data.

Version 1.3.201709 updated to remove latitude and longitude to _dramatically_ reduce the size of codes.js. 
Future enhancement may include these fields again if end users request it.

Version 1.2.201709 is the new way to show the year and month of the latest data in format `yyyyMM` 

Version 1.2.0 
    Function lookup: returns zip code, city, state, latitude, longitude, timeZoneId.
    Function lookupWithTime: returns zip code, city, state, latitude, longitude, timeZoneId, and current time in that time zone.

Version 1.1.*: by request I added timezone offset/timezone/timezone abbreviation/long statename/whether or not the zipcode observes daylight savings time.
Note that the end user will have to determine if daylight savings time is in use and alter the offset as appropriate. 
Future releases _may_ include that enhancement. I would recommending looking at npm package moment/moment-timezone for the use of dates and time.
