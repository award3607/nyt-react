const express = require('express');
const bodyparser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//morgan for logging
app.use(logger('dev'));

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

//port
const PORT = process.env.PORT || 3000;

//static
app.use(express.static('client/build'));

//routes
app.use(routes);

//mongoose config
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {poolSize: 15});

app.listen(PORT, () => {
    console.log(`NYT React server running on PORT ${PORT}`);
});