module.exports = () => {
    const twitterCredentials = require('./credentials.js');
    const Twit = require('twit');
    return new Twit(twitterCredentials);
}