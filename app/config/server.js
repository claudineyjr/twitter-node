const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const twitterCredentials = require('./credentials.js');
const bodyParser = require('body-parser');
const Twit = require('twit');
const consign = require('consign');

const twitterClient = new Twit(twitterCredentials);


app.use(bodyParser.json());
app.use(express.static('./app/public'));


app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./app/controllers')
    .into(app);


module.exports = {
    app,
    PORT,
    twitterClient
}