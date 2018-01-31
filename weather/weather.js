//We fetch the data from forecast.io, get API from https://developer.forecast.io
// 5dc09d572862d665fe45bc9274a34360, 30.3558936, -92.60210610000001
const request = require('request');

var getWeather = (lat, lng, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/5dc09d572862d665fe45bc9274a34360/${lat},${lng}`,
        json: true
    }, (error, response, body) =>{
        if(error){
            callback('Unable to connect to forecast.io server');
        }else if(response.statusCode === 400){
            callback('Unable to request Weather.');
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            //console.log(body.currently.temperature);
        }

    });
};

module.exports.getWeather = getWeather;

