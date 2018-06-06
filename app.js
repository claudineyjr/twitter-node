const { app, PORT, twitterClient } = require('./app/config/server');

app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
