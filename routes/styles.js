const express = require('express');
const router = express.Router();
const { getAllStyles } = require('../controllers/styles');

router.get('/', getAllStyles);

module.exports = router;
