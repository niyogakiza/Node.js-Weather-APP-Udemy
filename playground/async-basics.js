//=========CallStack and EventLoops.===========

console.log('Starting app');// in call stack this runs first and it execute.

// This runs in call stack then then go in Node APIs and wait there.
// setTimeout(() =>{
//     console.log('inside of callback');
// }, 2000);
//This runs in call stack then go to Nodes APIs and wait there but then proceed in callback queue.
//
// setTimeout(() =>{
//     console.log('second setTimeout');
// }, 0);

//This runs straight and executes.
console.log('Finishing up');
/* So starting app runs first, and executes, then finishing up, then secondTimeout at the end inside of callback
* All of this is because the callback queue will fire first second setTimeout AND then inside of callback,
* and the other console.log, they don't go in APIs nodes and not even in callBack queue.
* */

/* i will search https://www.npmjs.com/package/request and run in cmd npm install request@ the latest version
* i run this npm install request@2.83.0 --save
* Then to fetch the weather app address will use my location json url from googleapis.com
* https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB48K7MnLGjHOLRg8YlZVgGg2kIj2zNrXU&address=B901SQ%20Shirley%20Solihull of course i wrote address with %20 was space
 * in the middle then i copy the link that gives location json.,
 * check out code in app.js when i run it i got this output
 * Aimables-Air:weather-app aimableniyogakiza$ node app.js
{ results:
   [ { address_components: [Array],
       formatted_address: 'Aldershaws, Shirley, Solihull B90 1SQ, UK',
       geometry: [Object],
       place_id: 'ChIJyVJaw-S4cEgRIQIOma-kvLI',
       types: [Array] } ],
  status: 'OK' }
 is amazing!!
 * npm install yargs@11.0.0 --save to install yargs always check on npm yargs for the latest version.
 * ============= Encoding  User Input
 * Method is called encodeURIComponent('')it takes only one string arguments.
 * encodeURIComponent('B901SQ Shirley Solihull')// output:'B901SQ%20Shirley%20Solihull' as you see
 * it adds %20 in the middle where are space.
 * We have another method called decodeURIComponent('')
 * if i write like decodeURIComponent('B901SQ%20Shirley%20Solihull')//OUTPUT:'B901SQ Shirley Solihull',
 * So we will create a var encodedAddress = encodeURIComponent(argv, address);
 * then will modify my google api link , replace it with encodedAddress this will make it possible to,
 * get any address in right format.
 * `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB48K7MnLGjHOLRg8YlZVgGg2kIj2zNrXU&address=${encodedAddress}`;
 * then i will run node app.js -a '21051  via dei bersaglieri 1 Arcisate', and output:
 *address: Via dei Bersaglieri, 1, 21051 Arcisate VA, Italy
  Latitude: 45.8569048
   Longitude: 8.8652438              ,
*
* CallBacks Error:
 */