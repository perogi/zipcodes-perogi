## Historical Change Log
Version 1.3.201906
June 2019 data - addition of 2 zipcodes.
npm audit: found 0 vulnerabilities 
Stryker mutation tests.  Passed 100.0  0 Survived

Version 1.3.201905  
Please note: Due to many requests, Latitude and Longitude are now returned (if provided).  
May 2019 data - Removal of one zipcode.  
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

Version 1.3.201904  
April 2019 data - no difference from March 2019.     
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

Version 1.3.201903  
March 2019 data    
Removal of a 1 zipcodes.  
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0 

Version 1.3.201902  
February 2019 data    
Removal of a 2 zipcodes.  
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

Version 1.3.201901  
January 2019 data - no difference from December 2018.    
npm audit: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

Version 1.3.201812  
December 2018 data.  
Addition of 1 zipcode.  
npm audit: (+) 0 vulnerabilities found.
Stryker mutation tests.  Passed 100.0  
Removal of event-stream and flatmap-stream packages (dependencies of npm-run-all)

Version 1.3.201811  
November 2018 data.  
Addition of 3 zipcodes.  
Removal of a 1 zipcode.  
nsp check: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  

Version 1.3.201810 October 2018 data. Removal of a 1 zipcode.  
nsp check: (+) 0 vulnerabilities found.  
Stryker mutation tests.  Passed 100.0  
Lots of formatting changes. Set indent to 2 spaces.
Update all packages to remove any vulnerabilities. 
Update scripts to have all tests run as the default.

Version 1.3.201808 August 2018 data. Removal of a 3 zipcodes. Addition of 1 zipcode.  
nsp check: (+) 1 vulnerabilities found. 3.7 (low)  
package tree: stryker > log4js > streamroller > debug   
Stryker mutation tests.  Passed 100.0  
Apology for not updating during June 2018. I updated the data but never uploaded it to npmjs.org.  

Version 1.3.201807 July 2018 data. Removal of a 3 zipcodes. One city renamed. Addition of 6 zipcodes  
nsp check: (+) 1 vulnerabilities found. 3.7 (low)  
package tree: stryker > log4js > streamroller > debug   
Stryker mutation tests.  Passed 100.0
Apology for not updating during June 2018. I updated the data but never uploaded it to npmjs.org.

Version 1.3.201805 May 2018 data. Removal of a dozen zipcodes. Five cities renamed.  
nsp check: (+) 1 vulnerabilities found. 3.7 (low)  
package tree: stryker > log4js > streamroller > debug   
Stryker mutation tests.  Passed 100.0

Version 1.3.201804 April 2018 data. Update of 5 cities - 3 name changes and 2 lat/long update.  
nsp check: (+) 1 vulnerabilities found. 3.7 (low)  
package tree: stryker > log4js > streamroller > debug   
Stryker mutation tests.  Passed 100.0

Version 1.3.201803 Update of 3 cities - 1 name change and all 3 lat/long update.  
nsp check: (+) No known vulnerabilities found.  
Added Stryker mutation tests.  Passed 100.0

Version 1.3.201802 Removal of 4 zipcodes and the addition of 1.  
All packages have been updated for minor/build versions. Keeping mocha at 3.4.2.  
nsp check: (+) No known vulnerabilities found 

Version 1.3.201801 minor updates to the data.

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
