const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/', function(req, res) {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()} :: latitude = ${req.body.latitude} - longitude = ${req.body.longitude}`);
    res.sendStatus(200);
});

app.listen(3000, function() {
    console.log('http://localhost:3000');
});