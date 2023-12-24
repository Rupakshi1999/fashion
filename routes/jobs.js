const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs');
const { uploadResume } = require('../controllers/upload');

router.get('/', getAllJobs);
router.post('/', createJob);
router.get('/:id', getJob);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);
router.post('/uploadResume', uploadResume);

module.exports = router;
