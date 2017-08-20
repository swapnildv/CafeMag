const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();



// connect to mongodb.
mongoose.connect('mongodb://localhost/cafemag');
mongoose.Promise = global.Promise;

//List of middlewares.

//1)Express Static website.
app.use(express.static('public'));
//2) Body - Parser
app.use(bodyParser.json());
//3) initialize routes.
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/projectApi'));
app.use('/api', require('./routes/userApi'));
app.use('/api', require('./routes/supsheetApi'));
//4) Error handling middleware.
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

//listen for request 
app.listen(process.env.port || 4000, function () {
    console.log('now listening for request.');
}); 