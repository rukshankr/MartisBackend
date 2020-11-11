const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const dbService = require('../controller/inspectorDbService');
const db = dbService.getDbServiceInstance();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/getInspection', (req, res) => {
    const result = db.getAllData();

    result
        .then(data => {
            console.log(data);
            res.json({ data: data });
        })
        .catch(err => console.log(err));
})

router.post('/newInspection', (req, res) => {
    let assetId = req.body.assetId;
    let region = req.body.region;
    let date = req.body.date;
    let milePost = req.body.milePost;

    const result = db.insertIntoInspection(assetId, region, date, milePost);

    result
    .then(data => {
        console.log(data.Status);
        res.json(data);
    })
    .catch(err => console.log(err.message));
})

module.exports = router;