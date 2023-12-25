import axios from 'axios';

const get = async (endpoint, headers) => {
  try {
    const base_url = 'http://localhost:4000/api/v1/';
    const resp = await axios(base_url + endpoint, { headers });

    return resp;
  } catch (err) {
    return err.response;
  }
};

export default get;
