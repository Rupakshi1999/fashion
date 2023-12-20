const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors/index');

const register = async (req, res) => {
  // validate password length
  const { password } = req.body;
  if (password) {
    if (password.length < 6 || password.length > 30) {
      throw new BadRequestError(
        'Please create password with at least 6 characters and at most 30 characters'
      );
    }
  }

  const user = await User.create({ ...req.body });

  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ first: user.first, last: user.last, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide a email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError(`Invalid email ${email}`);
  }
  const isPasswordCorrect = await user.checkPassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError(`Invalid credentials`);
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ user: { first: user.first, last: user.last }, token });
};

module.exports = { register, login };
