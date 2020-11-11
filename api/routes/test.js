const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const dbService = require('../controller/testDbService');
const db = dbService.getDbServiceInstance();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/getTests', (req, res) => {
    const result = db.getAllData();

    result
        .then(data => {
            console.log(data);
            res.json({ data: data });
        })
        .catch(err => console.log(err));
})

router.patch('/changeStatus', (req, res) => {
    let assetId = req.body.assetId;
    let inspectorId = req.body.inspectorId;
    let status = req.body.status;

    const result = db.changeStatus(assetId, inspectorId, status);

    result
    .then(reply => res.json(reply))
    .catch(err => console.log(err));
})

module.exports = router;