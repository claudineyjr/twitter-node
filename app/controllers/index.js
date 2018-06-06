const twitter = require('../config/twitterAccess')();

function getTweets(app, req, res) {
    const params = req.params || {};
    const query = getQueryInfos(params);

    twitter.get('search/tweets', query, (err, data, resposne) => {
        if(err) console.log(err);
        res.render('index', { tweets: data.statuses });
    })
}

function getQueryInfos(params) {
    return {
        q: params.hashtag,
        count: 20
    };
}

module.exports = {
    getTweets
}