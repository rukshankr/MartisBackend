const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const inspectionRoutes = require('./api/routes/inspections');
const testRoutes = require('./api/routes/test');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/inspections', inspectionRoutes);
app.use('/tests', testRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;