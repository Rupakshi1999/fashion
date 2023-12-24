import axios from 'axios';

// Accept: 'application/json';
const post = async (url, body) => {
  const base_url = 'http://localhost:4000/api/v1/';
  try {
    const resp = await axios.post(base_url + url, body);
    return resp;
  } catch (err) {
    return err.response;
  }
};

export default post;
