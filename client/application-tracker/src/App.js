import AddJobs from './jobs/AddJobs';
import Auth from './auth/Auth';
import Jobs from './jobs/Jobs';

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
