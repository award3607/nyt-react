const express = require('express');
const bodyparser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api/apiRoutes');
const cors = require('cors');
const path = require('path');


const app = express();

//morgan for logging
app.use(logger('dev'));

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

//port
const PORT = process.env.PORT || 3001;

//static
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//routes
app.use('/api', apiRoutes);

//otherwise send React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//allow CORS
// app.use(cors());

//mongoose config
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {poolSize: 15}).then(() => {
    app.listen(PORT, () => {
        console.log(`NYT React server running on PORT ${PORT}`);
    })
});

