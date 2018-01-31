const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()// for help info
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB48K7MnLGjHOLRg8YlZVgGg2kIj2zNrXU&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) =>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/5dc09d572862d665fe45bc9274a34360/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) =>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    } else{
        console.log(e.message);
    }

});

//www.npmjs.com/package/axios
//Axios use promises.
// run npm install axios@latest version --save
