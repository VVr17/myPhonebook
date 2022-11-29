import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorizationHeader } from 'helpers/axiosOptions';
import { ISignInUser, ISignUpUser, IUser, IUserDb } from 'types/user';
import { RootState } from 'redux/store';

export const userRegister = createAsyncThunk(
  'auth/register',
  async (credentials: ISignUpUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      authorizationHeader.setAuthToken(data.token);
      toast.success(
        `User ${data.user.name.toUpperCase()} has been successfully registered`
      );
      return data as IUserDb;
    } catch (error) {
      toast.error('Register failed. Please, try again');
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials: ISignInUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      authorizationHeader.setAuthToken(data.token);
      toast.success(
        `User ${data.user.name.toUpperCase()} has been successfully logged in`
      );
      return data as IUserDb;
    } catch (error) {
      toast.error('Log in failed. Please, verify data and try again');
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (name: string, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      toast.info(`User ${name.toUpperCase()} has been successfully logged out`);
      authorizationHeader.deleteAuthToken();
    } catch (error) {
      toast.error('Log out failed. Please, try again');
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    if (!token)
      return rejectWithValue('There is no valid token, login is needed');

    authorizationHeader.setAuthToken(token);

    try {
      const { data } = await axios.get('/users/current');
      return data as IUser;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.message;
        return rejectWithValue(err);
      }
      throw new Error('another error');
    }
  }
);
