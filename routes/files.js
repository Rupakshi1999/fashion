const express = require('express');
const router = express.Router();
const {
  getAllFiles,
  getResume,
  getCoverLetter,
  getFile,
} = require('../controllers/files');

// returns path to all files
router.get('/', getAllFiles);

// // get file by file path
router.get('/:path', getFile);

// get a single file by job id
router.get('/resume/:id', getResume);
router.get('/coverletter/:id', getCoverLetter);

module.exports = router;
