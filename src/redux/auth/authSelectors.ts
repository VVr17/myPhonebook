import type { RootState } from 'redux/store';

const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
const selectUserEmail = (state: RootState) => state.auth.user.email;
const selectUserName = (state: RootState) => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserEmail,
  selectUserName,
  selectIsRefreshing,
};
