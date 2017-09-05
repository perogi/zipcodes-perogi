Zip Code Lookups
================
SP2:TODO update this build status
[![Build Status](https://travis-ci.org/perogi/zipcodes-perogi.svg?branch=master)](https://travis-ci.org/perogi/zipcodes-perogi)

This is a fork of [davglass' excellent zipcode lookup project](https://github.com/davglass/zipcodes).  

A localized (flatfile) zipcode lookup.

Zipcode data is taken from a new more up-to-date source compared to davglass' project. 
This source has monthly updates for zip code data. For example: September 2017 data removed 7 zip codes that are no longer used.

It was then transformed into a JSON object and then wrapped with some helper methods.

Other Differences
-----------
This application only has the default zip code information and only for the 50 US states and Washington, DC.  

Versions
--------
Version 1.2.201709 is the new way to show the year and month of the latest data in format `yyyyMM` 

Version 1.2.0 
    Function lookup: returns zip code, city, state, latitude, longitude, timeZoneId.
    Function lookupWithTime: returns zip code, city, state, latitude, longitude, timeZoneId, and current time in that time zone.

Version 1.1.*: by request I added timezone offset/timezone/timezone abbreviation/long statename/whether or not the zipcode observes daylight savings time.
Note that the end user will have to determine if daylight savings time is in use and alter the offset as appropriate. 
Future releases _may_ include that enhancement. I would recommending looking at npm package moment/moment-timezone for the use of dates and time.

Usage
-----
    var zipcodes = require('zipcodes-perogi');

Zipcode Lookup
--------------

    const hills = zipcodes.lookup(90210);  
      
    response:
    { 
        zip: '90210',  
        city: 'Beverly Hills',  
        state: 'CA',
        stateName: 'California',
        timezone: 'Pacific',
        timezoneShort: 'PST',
        offset: '-8',
        dstObserved: 'Y'
    }


Lookup By Name
--------------

    const l = zipcodes.lookupByName('Concord', 'NH');  
      
    //Always returns an array, since cities can have multiple zip codes
    response: 
    [ 
        { 
            zip: '03301',
            city: 'Concord',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y'
        },
        { 
            zip: '03302',
            city: 'Concord',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y'
        },
        { 
            zip: '03303',
            city: 'Concord',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y'  
        } ,
        { 
            zip: '03305',
            city: 'Concord',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y' 
        } 
     ]

Lookup By State
--------------

    const l = zipcodes.lookupByState('NH');
      
    //response would be an array of cities with corresponding data
    [ 
        { 
            zip: '03031',
            city: 'Amherst',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y' 
        },
        { 
            zip: '03032',
            city: 'Auburn',
            state: 'NH',
            stateName: 'New Hampshire',
            timezone: 'Eastern',
            timezoneShort: 'EST',
            offset: '-5',
            dstObserved: 'Y' 
        },
     ...
     ]


The original CSV file that I am using for this data is not included in this repo due to licensing laws, but I did wrap up
the best way to get the data and how to convert it into the format that this module uses.
