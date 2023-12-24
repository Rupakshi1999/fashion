import { useState } from 'react';
import post from '../../axios/post';

const AddJobs = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await post('jobs', {
        title,
        company,
        resume,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('resume', file);
      const {
        data: { src },
      } = await post('jobs/uploadResume', formData);
      setResume(src);
    } catch (err) {
      resume = null;
      console.log(err);
    }
  };

  return (
    <section>
      <h2>Add Jobs to track</h2>
      <form>
        <label>Position</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="file"
          name="resume"
          id="resume"
          value={resume}
          onChange={handleUpload}
        />
        <input
          type="file"
          name="coverLetter"
          id="coverLetter"
          // value={coverLetter}
          // onChange={handleUpload}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default AddJobs;
