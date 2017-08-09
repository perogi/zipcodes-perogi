Zip Code Lookups
================
[![Build Status](https://travis-ci.org/perogi/zipcodes-perogi.svg?branch=master)](https://travis-ci.org/perogi/zipcodes-perogi)

This is a fork of davglass' excellent [zipcode lookup project](https://github.com/davglass/zipcodes).  

Differences
-----------
I only wanted the Default/Primary US zipcode information so the codes.js file only includes that information.  

Versions
--------
    Version 1.2.*: by request I added timeZoneId for lookup, lookupByName, and lookupByState.  I also added the current time in the zipcode for lookupWithTime.

Usage
-----
    const zipcodes = require('zipcodes-perogi');

Zipcode Lookup
--------------

    const jake = zipcodes.lookup(90210);  
      
    response:
    { 
        zip: '90210',  
        city: 'Beverly Hills',  
        state: 'CA',
        timeZoneId: 'America/Los_Angeles',
    }  
      
    Note: Invalid inputs will result in an undefined return object  

Zipcode and Time Lookup
--------------

    const shadow = zipcodes.lookupWithTime(90210);  
      
    response:
    { 
        zip: '90210',  
        city: 'Beverly Hills',  
        state: 'CA',
        timeZoneId: 'America/Los_Angeles',
        time: '2017-08-08T18:33:53-07:00'
    }  
      
    Note: Invalid inputs will result in an undefined return object  

Lookup By Name
--------------

    const callie = zipcodes.lookupByName('Concord', 'NH');  
      
    //Always returns an array, since cities can have multiple zip codes
    response: 
    [ 
        { 
            zip: '03301',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York'
        },
        { 
            zip: '03302',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York'
        },
        { 
            zip: '03303',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York'
        } ,
        { 
            zip: '03305',
            city: 'Concord',
            state: 'NH',
            timeZoneId: 'America/New_York'
        } 
     ]  
      
    Note: Invalid inputs will return an empty array

Lookup By State
--------------

    const max = zipcodes.lookupByState('NH');
      
    //response would be an array of cities with corresponding data
    [ 
        { 
            zip: '03031',
            city: 'Amherst',
            state: 'NH',
            timeZoneId: 'America/New_York'
        },
        { 
            zip: '03032',
            city: 'Auburn',
            state: 'NH',
            timeZoneId: 'America/New_York'
        },
     ...
     ]  
      
    Note: Invalid inputs will return an empty array  

Development
-----------
From the `/scripts` directory, type `fetch.sh`. (Note you will need to provide your own comma-delimited data file.)

Due to how the data was purchased, the original CSV file that I am using for this data is not included in this repo, but I did wrap up
the best way to get the data and how to convert it into the format that this module uses.
