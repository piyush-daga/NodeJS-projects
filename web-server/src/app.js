const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// define paths for Express configs
const publicDirName = path.join(__dirname, '../public');
const viewsDirName = path.join(__dirname, '../templates/views');
const partialsDirName = path.join(__dirname, '../templates/partials');


// changing the default dir from views to templates and initializing the
// handlebars templating engine
app.set('views', viewsDirName);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsDirName);

// To serve static content to web server
app.use(express.static(publicDirName));

app.get('', (req, res) => {
    res.render('index', {
        title: 'DarkSky Weather App',
        name: 'RoboFarm'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'RoboFarm'
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is the help landing page',
        name: 'RoboFarm '
    })
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Bangalore',
        forecast: 25
    })
});


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page Not Found',
        name: 'RoboFarm',
        errorMessage: 'Help article not found.'
    })
});


app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page Not Found',
        name: 'RoboFarm',
        errorMessage: 'Probably not what you were looking for.'
    })
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});