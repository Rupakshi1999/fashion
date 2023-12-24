import React from 'react';
import Job from './Job';
const getJobs = () => {
  let job1 = {
    company: 'Google',
    title: 'Dev',
    dateCreated: 'Today',
    status: 'status',
    _id: 1,
  };
  let job2 = {
    company: 'company',
    title: 'title',
    dateCreated: 'date',
    status: 'status',
    _id: 2,
  };
  return [job1, job2];
};

function Jobs(props) {
  const { user } = props;
  return (
    <section className="joblist">
      {getJobs().map((job) => {
        return <Job job={job} key={job._id} />;
      })}
    </section>
  );
}

export default Jobs;
