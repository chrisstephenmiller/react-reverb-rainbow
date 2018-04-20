'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const app = express();

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', require('./api'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

const { db, Listing } = require('./db')
const PORT = 3001

db.sync({ force: false })
    .then(() => {
        console.log('db synced')
        app.listen(process.env.PORT || PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
    });

module.exports = app;