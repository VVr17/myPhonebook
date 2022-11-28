import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authorizationHeader } from 'helpers/axiosOptions';
import { toast } from 'react-toastify';

export const userRegister = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      authorizationHeader.setAuthToken(data.token);
      toast.success(
        `User ${data.user.name.toUpperCase()} has been successfully registered`
      );
      return data;
    } catch (error) {
      toast.error('Register failed. Please, try again');
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      authorizationHeader.setAuthToken(data.token);
      toast.success(
        `User ${data.user.name.toUpperCase()} has been successfully logged in`
      );
      return data;
    } catch (error) {
      toast.error('Log in failed. Please, verify data and try again');
      return rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (name, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      toast.info(`User ${name.toUpperCase()} has been successfully logged out`);
      authorizationHeader.deleteAuthToken();
    } catch (error) {
      toast.error('Log out failed. Please, try again');
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;

    if (!token)
      return rejectWithValue('There is no valid token, login is needed');

    authorizationHeader.setAuthToken(token);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
