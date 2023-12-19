const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const bryptjs = require('bcryptjs');

const register = async (req, res) => {
  const { first, last, email, password } = req.body;
  console.log(req.body);

  if (password) {
    if (password.length < 6 || password.length > 30) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(
          'Please create password with atleast 6 characters and atmost 30 characters'
        );
    }
  }

  const salt = await bryptjs.genSalt(10);
  const hash = await bryptjs.hash(password, salt);
  const userInfo = { first, last, email, password: hash };
  const user = await User.create({ ...userInfo });
  return res.status(StatusCodes.CREATED).send(`register ${user}`);
};

const login = async (req, res) => {
  res.send('login');
};

module.exports = { register, login };
