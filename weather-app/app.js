const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (location) {

    geocode(location, (error, data) => {

        if (error)
            return console.log(error);

        forecast(data.latitude, data.longitude, (error, weatherData) => {

            if (error)
                return console.log(error);

            console.log(chalk.inverse(data.location));
            console.log(weatherData.summary + ' The current temperature is: ' + weatherData.currTemp +
                String.fromCharCode(176) +'C. There is ' + weatherData.currPrecip + '% chance of precipitation.')
        })
    });

} else {
    console.log("Please provide a location as command line argument!")
}
