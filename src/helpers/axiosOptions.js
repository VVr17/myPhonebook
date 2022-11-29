import axios from 'axios';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const authorizationHeader = {
  setAuthToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};
