const express = require('express');
const router = express.Router();
const { getStyles } = require('../controllers/styles');

router.get('/', getStyles);

module.exports = router;
