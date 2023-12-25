import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2NTg4OGE3M2ExNTBiNzZkNmRmZWM5N2UiLCJuYW1lIjoiUnVwYWtzaGkgQWdnYXJ3YWwiLCJpYXQiOjE3MDM0NTQ5NzUsImV4cCI6MTcwNTE4Mjk3NX0.0ggK39DslrXU9MK6GWmZG_V4aIkomg_1wcFZRlTkb4w';

axios.defaults.headers.common['Accept'] = ['application/json'];
axios.defaults.headers.common['Content-type'] = ['multipart/form-data'];
axios.defaults.headers.common['authorization'] = [`Bearer ${token}`];
