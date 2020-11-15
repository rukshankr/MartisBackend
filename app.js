const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const inspectionRoutes = require('./api/routes/inspections');
const testRoutes = require('./api/routes/test');
const repairRoutes = require('./api/routes/repair');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/inspections', inspectionRoutes);
app.use('/tests', testRoutes);
app.use('/repairs', repairRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
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

app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
})

module.exports = app;