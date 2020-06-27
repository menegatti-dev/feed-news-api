import axios from 'axios';

const ConnectApi = axios.create({
  baseURL: 'http://165.22.142.228:1602',
});

export default ConnectApi;
