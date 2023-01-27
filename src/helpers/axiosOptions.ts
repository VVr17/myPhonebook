import axios from 'axios';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const authorizationHeader = {
  setAuthToken(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};
