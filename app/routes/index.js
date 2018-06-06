module.exports = (app, req, res) => {
    app.get('/:hashtag', (req, res) => {
        app.app.controllers.index.getTweets(app, req, res);
    })
}