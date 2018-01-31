const request = require('request');


var geocodeAddress = (address, callback) =>{
    var encodedAddress = encodeURIComponent(address);
    /* to understand more about request check out on npm documentation.
    The body is part of http, when you make a request the data that comes back that it the body of request
    when you make  a request on browser what you get is the body in the screen, a body can be html page of data in file.json
    which is the case in our google api request,iN RESPONSE we have http status like 200, and the body of json data then
    the headers that comes with google,but we have to set our headers, then we have request that stores the request history that
    was made. method:GET  is because we set our json request to true.
    */

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB48K7MnLGjHOLRg8YlZVgGg2kIj2zNrXU&address=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        //Callback errors handles
        if(error){
            callback('Unable to connect to Google servers');
        } else if(body.status === 'ZERO_RESULTS'){
           callback('Unable to find that address.');
        } else if(body.status === 'OK'){
            callback(undefined, {
                address:  body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
        }
        //undefined is used to filter arguments, the third property will specify how many spaces you need between to use for indentation
        //console.log(JSON.stringify(body, undefined, 2 ));
    });
};

module.exports.geocodeAddress = geocodeAddress;