import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from 'constants/constants';
import {
  getCurrentUser,
  userLogin,
  userLogout,
  userRegister,
} from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [userRegister.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [userLogin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [userLogout.fulfilled](state, { payload }) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [getCurrentUser.pending](state, { payload }) {
      state.isRefreshing = true;
    },
    [userLogin.rejected]: handleRejected,
    [userRegister.rejected]: handleRejected,
    [userLogout.rejected]: handleRejected,
    [getCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: LOCAL_STORAGE_KEY.auth,
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
