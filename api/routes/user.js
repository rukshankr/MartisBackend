const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const dbService = require('../controller/testDbService');
const db = dbService.getDbServiceInstance();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



module.exports = router;