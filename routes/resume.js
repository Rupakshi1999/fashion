const express = require('express');
const router = express.Router();
const { addResume, getAllResumes } = require('../controllers/resumes');
const { uploadResume } = require('../controllers/upload');

router.get('/', getAllResumes);
router.post('/', addResume);
router.post('/upload', uploadResume);

module.exports = router;
