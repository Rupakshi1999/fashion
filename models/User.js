const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { StatusCodes } = require('http-status-codes');

const UserSchema = new mongoose.Schema({
  first: {
    type: String,
    required: [true, 'Please provide first name'],
    minLength: 1,
    maxLength: 100,
  },
  last: {
    type: String,
    required: [true, 'Please provide last name'],
    minLength: 1,
    maxLength: 100,
  },
  email: {
    type: String,
    required: [true, 'Please provide last name'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
});

UserSchema.pre('save', async function (next) {
  // encrypt the password before staoring it to the db
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(this.password, salt);
  this.password = hash;
  console.log(this);
  next();
});

module.exports = mongoose.model('User', UserSchema);
