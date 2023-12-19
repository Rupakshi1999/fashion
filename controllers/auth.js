const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  // validate password length
  const { password } = req.body;
  if (password) {
    if (password.length < 6 || password.length > 30) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(
          'Please create password with at least 6 characters and at most 30 characters'
        );
    }
  }

  const user = await User.create({ ...req.body });
  return res.status(StatusCodes.CREATED).send(`register ${user}`);
};

const login = async (req, res) => {
  res.send('login');
};

module.exports = { register, login };
