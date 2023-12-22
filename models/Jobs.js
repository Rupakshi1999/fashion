const mongoose = require('mongoose');
const JobsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title for a job posting must be provided'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters'],
  },
  company: {
    type: String,
    required: [true, 'Company name must be provided'],
    trim: true,
    maxlength: [50, 'company name cannot be more than 50 characters'],
  },
  liked: {
    type: Boolean,
    default: false,
  },
  stage: {
    type: String,
    enum: {
      values: ['Applied', 'Interview', 'Accepted', 'Rejected'],
      message: '{VALUE} is not supported',
    },
    default: 'Applied',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Jobs', JobsSchema);
