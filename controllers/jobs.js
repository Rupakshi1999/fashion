const { jobs__filter, sort_jobs, get_specified_fields } = require('../db/data');
const { NotFoundError, BadRequestError } = require('../errors/index');
const Jobs = require('../models/Jobs');
const { StatusCodes } = require('http-status-codes');
const { check_file_perm, check_file_exists } = require('./file_validators');
const path = require('path');
const getAllJobs = async (req, res) => {
  let result = Jobs.find(jobs__filter(req))
    .sort(sort_jobs(req.query))
    .select(get_specified_fields(req.query));

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 15;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;
  if (!jobs) {
    throw new NotFoundError(`no data with query ${req.query}`);
  }
  return res.status(StatusCodes.OK).json({ nmHits: jobs.length, jobs });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const { resume, coverletter } = req.body;
  // validate that if a resume and cover letter src is given
  // It must be available and owned by the user
  if (resume) {
    check_file_perm(resume, req.user.userID);
    check_file_exists(path.join(__dirname, '..', resume), 'resume');
  }
  if (coverletter) {
    check_file_perm(coverletter, req.user.userID);
    check_file_exists(path.join(__dirname, '..', coverletter), 'coverLetter');
  }

  const job = await Jobs.create(req.body);
  return res.status(StatusCodes.CREATED).json({ job });
};

const getJob = async (req, res) => {
  const {
    user: { userID },
    params: { id: JobID },
  } = req;
  let job = await Jobs.findOne({ _id: JobID, createdBy: userID });
  if (!job) {
    throw new NotFoundError(`no job with id ${JobID}`);
  }

  return res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const {
    user: { userID },
    params: { id: JobID },
    body: { company, title, resume, coverletter },
  } = req;
  if (company === '' || title === '') {
    throw new BadRequestError('Please provide company and title');
  }
  // validate that if a resume and cover letter src is given
  // It must be available and owned by the user
  if (resume) {
    check_file_perm(resume, userID);
    check_file_exists(path.join(__dirname, '..', resume), 'resume');
  }
  if (coverletter) {
    check_file_perm(coverletter, req.user.userID);
    check_file_exists(path.join(__dirname, '..', coverletter), 'coverLetter');
  }

  let job = await Jobs.findOneAndUpdate(
    { _id: JobID, createdBy: userID },
    { company, title },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!job) {
    throw new NotFoundError(`no job with id ${JobID}`);
  }
  return res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const {
    user: { userID },
    params: { id: JobID },
  } = req;
  let job = await Jobs.findOneAndDelete({ _id: JobID, createdBy: userID });
  if (!job) {
    throw new NotFoundError(`no job with id ${JobID}`);
  }
  return res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
