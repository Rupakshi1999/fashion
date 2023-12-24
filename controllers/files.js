const { NotFoundError } = require('../errors/index');
const Jobs = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const path = require('path');

const getAllFiles = async (req, res) => {
  // return two arrays: 1 with resume sources
  // another with cover letter sources
  const userID = req.user.userID;
  const jobs = await Jobs.find({ createdBy: userID }).select([
    'resume',
    'coverLetter',
  ]);

  // todo: add filtering and sorting
  let resumes = new Set();
  let coverLetters = new Set();

  jobs.forEach((job) => {
    if (job.resume) {
      resumes.add(job.resume);
    }
    if (job.coverLetter) {
      coverLetters.add(job.coverLetters);
    }
  });
  res.status(StatusCodes.OK).json({
    num_resume: resumes.length,
    resumeList: [...resumes],
    num_coverLetter: coverLetters.length,
    coverLetterList: [...coverLetters],
  });
};

const findJob = async (req) => {
  const {
    user: { userID },
    params: { id: JobID },
  } = req;

  // job id must be linked to current user
  const job = await Jobs.findOne({ _id: JobID, createdBy: userID });
  if (!job) {
    throw new NotFoundError(
      `No job exists with job id ${JobID} for user ${userID}`
    );
  }
  return job;
};

const getResume = async (req, res) => {
  const job = await findJob(req);
  if (!job.resume) {
    throw new NotFoundError(`No resume is linked with job ${req.params.id}`);
  }

  const resumePath = path.join(__dirname, '../', job.resume);
  return res.status(StatusCodes.OK).sendFile(resumePath);
};

const getCoverLetter = async (req, res) => {
  const job = await findJob(req);
  if (!job.coverLetter) {
    throw new NotFoundError(
      `no cover letter is linked with job ${req.params.id}`
    );
  }

  const coverLetterPath = path.join(__dirname, '../', job.coverLetter);
  return res.status(StatusCodes.OK).sendFile(coverLetterPath);
};

const getFile = async (req, res) => {
  res.send('file');
};

module.exports = {
  getAllFiles,
  getResume,
  getCoverLetter,
  getFile,
};
