import axios from 'axios';
const token = '';
axios.defaults.headers.common['Accept'] = ['application/json'];
axios.defaults.headers.common['Content-type'] = ['multipart/form-data'];
axios.defaults.headers.common['authorization'] = [`Bearer ${token}`];
