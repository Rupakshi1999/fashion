import AddJobs from './components/jobs/AddJobs';
import Auth from './components/auth/Auth';
import Jobs from './components/jobs/JobList';
import './axios/global';

function App() {
  return (
    <div>
      <Auth />
      <AddJobs />
      <Jobs />
    </div>
  );
}

export default App;
