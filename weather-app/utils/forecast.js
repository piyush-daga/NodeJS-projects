const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const darkSkyUrl = `https://api.darksky.net/forecast/1d6e68a1b0e0958701cc9adcdf16a378/${latitude},${longitude}?units=si`;

    request(darkSkyUrl, {json: true}, (error, {statusCode, body}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (statusCode === 400) {
            callback(response.body.error, undefined);
        }

        else if (statusCode === 200) {

            callback(undefined, {
                summary: body.daily.data[0].summary,
                currTemp: body.currently.temperature,
                currPrecip: body.currently.precipProbability
            })
        }
    });
};

module.exports = forecast;