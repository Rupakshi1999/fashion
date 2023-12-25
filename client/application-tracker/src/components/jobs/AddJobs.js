import { useState } from 'react';
import post from '../../axios/post';

const AddJobs = ({ token }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [resumeSrc, setResume] = useState('');

  const headers = {
    authorization: `Bearer ${token}`,
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log('uploading');
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('resume', file);
      headers['Content-type'] = 'multipart/form-data';
      const { data } = await post('jobs/uploadResume', formData, headers);
      console.log(data.src);
      setResume(data.src);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(
        'jobs',
        {
          title,
          company,
          resume: resumeSrc,
        },
        headers
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <form>
        <h2>Enter job information</h2>
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
        <label>Select Resume</label>
        <input
          type="file"
          name="resume"
          id="resume"
          value={resumeSrc}
          onChange={handleUpload}
          onClick={(e) => {
            e.target.value = null;
          }}
        />
        <label>Select Cover Letter</label>
        <input type="file" name="coverLetter" id="coverLetter" />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default AddJobs;
