const { StatusCodes } = require('http-status-codes');
const Resume = require('../models/Resumes');

const addResume = async (req, res) => {
  const resume = await Resume.create(req.body);
  res.StatusCodes(StatusCodes.CREATED).json({ resume });
};

const getAllResumes = async (req, res) => {
  const userID = req.user.userID;
  const resumes = await Resume.find({ createdBy: userID });
  res.StatusCodes(StatusCodes.OK).json({ resumes });
};

module.exports = {
  addResume,
  getAllResumes,
};
