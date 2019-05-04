#Zip Code Lookup
[![Build Status](https://travis-ci.org/perogi/zipcodes-perogi.svg?branch=master)](https://travis-ci.org/perogi/zipcodes-perogi)

A localized (flatfile) zipcode lookup.

Zipcode data is taken from a new more up-to-date source compared to [davglass'](https://github.com/davglass/zipcodes) project. 
This source has monthly updates for zip code data. For example: September 2017 data removed 7 zip codes that are no longer used.

## Other Differences
This application only has the default zip code information and only for the 50 US states and Washington, DC.  

## Last Change Log
Version 1.3.201905  
Please note: Due to many requests, Latitude and Longitude are now returned (if provided).  
May 2019 data - Removal of one zipcode.  
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

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
See CHANGE_LOG.md file