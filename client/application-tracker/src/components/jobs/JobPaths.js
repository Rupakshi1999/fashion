import AddJobs from './AddJobs';
import Auth from '../auth/Auth';
import Jobs from './JobList';
import { useState } from 'react';

function JobPaths() {
  const [token, setToken] = useState();
  console.log(token);
  if (!token) {
    return <Auth setToken={setToken} />;
  }

  return (
    <div>
      <AddJobs token={token} />
      <Jobs token={token} />
    </div>
  );
}

export default JobPaths;
