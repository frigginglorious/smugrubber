const app = require('express')();
app.get('/', (req, res) => {
    res.send('Welcome Smugger');
});
app.listen();

