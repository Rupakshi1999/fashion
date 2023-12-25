import React from 'react';
import Job from './Job';
import get from '../../axios/get';
import { useState, useEffect } from 'react';

function Jobs({ token }) {
  const [allJobs, setAllJobs] = useState([]);

  const handleAllJobs = async () => {
    try {
      const headers = { authorization: `Bearer ${token}` };
      const { data } = await get('jobs', headers);
      setAllJobs(data.jobs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAllJobs();
  }, []);

  if (!allJobs || allJobs.length === 0) {
    return <h2> No jobs to display...</h2>;
  }

  return (
    <div>
      <h5>
        {allJobs.length} job{allJobs.length > 1 && 's'} found
      </h5>
      <section className="joblist">
        {allJobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </section>
    </div>
  );
}

export default Jobs;
