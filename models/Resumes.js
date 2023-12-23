const mongoose = require('mongoose');
const ResumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a user'],
  },
  file: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Resume', ResumeSchema);
