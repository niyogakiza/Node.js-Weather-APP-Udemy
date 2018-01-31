const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB48K7MnLGjHOLRg8YlZVgGg2kIj2zNrXU&address=${encodedAddress}`,
            json: true
        }, (error, response, body) =>{
            //Callback errors handles
            if(error){
               reject('Unable to connect to Google servers');
            } else if(body.status === 'ZERO_RESULTS'){
             reject('Unable to find that address.');
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,  //output:address:Aldershaws, Shirley, Solihull B90 1SQ, UK
                    Latitude: body.results[0].geometry.location.lat,  //output:Latitude: 52.38244390000001
                    Longitude: body.results[0].geometry.location.lng  //output:Longitude: -1.8374663
                });
            }
            //undefined is used to filter arguments, the third property will specify how many spaces you need between to use for indentation
            //console.log(JSON.stringify(body, undefined, 2 ));
        });
    });
};

geocodeAddress('19146').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) =>{
    console.log(errorMessage);
});