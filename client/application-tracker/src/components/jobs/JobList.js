import React from 'react';
import Job from './Job';
import get from '../../axios/get';
import { useState } from 'react';

function Jobs(props) {
  const [jobs, setJobs] = useState('');

  let allJobs = [];
  const handleAllJobs = async () => {
    try {
      const { data } = await get('jobs');
      allJobs = data.jobs;
      setJobs(data.jobs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleAllJobs()}>Applications</button>

      <section className="joblist">
        {allJobs.map((job) => {
          console.log(job);
          return <Job job={job} key={job._id} />;
        })}
      </section>
    </div>
  );
}

export default Jobs;
