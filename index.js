const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())

app.get('/', function(req, res) {
    res.json({msg: 'BackGpsPro Start...'});
});

app.post('/', function(req, res) {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()} :: latitude = ${req.body.latitude} - longitude = ${req.body.longitude}`);
    res.json({msg: 'Location in...'});
});

app.listen(3000, function() {
    console.log('http://localhost:3000');
});