import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from 'constants/constants';
import {
  getCurrentUser,
  userLogin,
  userLogout,
  userRegister,
} from './authOperations';
import { IUser } from 'types/user';

// Define a type for the slice state
export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

// Define the initial state using that type
const authInitialState: IAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(
        getCurrentUser.fulfilled,
        (state, { payload }: PayloadAction<IUser>) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userLogin.rejected, (state, { payload }: PayloadAction<any>) => {
        if (typeof payload === 'string') state.error = payload;
      })
      .addCase(
        userRegister.rejected,
        (state, { payload }: PayloadAction<any>) => {
          if (typeof payload === 'string') state.error = payload;
        }
      )
      .addCase(
        userLogout.rejected,
        (state, { payload }: PayloadAction<any>) => {
          if (typeof payload === 'string') state.error = payload;
        }
      )
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
        state.isRefreshing = false;
      });
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
