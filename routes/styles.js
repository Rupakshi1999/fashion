const express = require('express');
const router = express.Router();
const { getAllStyles, filterStyles } = require('../controllers/styles');

router.get('/', getAllStyles);
router.get('/filter', filterStyles);

module.exports = router;
