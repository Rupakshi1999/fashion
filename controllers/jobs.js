const { jobs__filter, sort_jobs, get_specified_fields } = require('../db/data');
const { NotFoundError } = require('../errors/index');
const Jobs = require('../models/Jobs');

const getAllJobs = async (req, res) => {
  let result = Jobs.find(jobs__filter(req.query))
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
  return res.status(200).json({ nmHits: jobs.length, data: jobs });
};

const createJob = async (req, res) => {
  return res.send('job created');
};
const getJob = async (req, res) => {
  res.send('job');
};
const updateJob = async (req, res) => {
  res.send('job update');
};
const deleteJob = async (req, res) => {
  res.send('job delete');
};

module.exports = {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
