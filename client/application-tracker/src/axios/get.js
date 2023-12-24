import axios from 'axios';

const get = async (endpoint) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2NTg4OGE3M2ExNTBiNzZkNmRmZWM5N2UiLCJuYW1lIjoiUnVwYWtzaGkgQWdnYXJ3YWwiLCJpYXQiOjE3MDM0NTQ5NzUsImV4cCI6MTcwNTE4Mjk3NX0.0ggK39DslrXU9MK6GWmZG_V4aIkomg_1wcFZRlTkb4w';
  try {
    const base_url = 'http://localhost:4000/api/v1/';
    const resp = await axios(base_url + endpoint);

    return resp;
  } catch (err) {
    return err.response;
  }
};

export default get;
