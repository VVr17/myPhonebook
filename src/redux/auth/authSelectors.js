const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectUserEmail = state => state.auth.user.email;
const selectUserName = state => state.auth.user.name;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserEmail,
  selectUserName,
  selectIsRefreshing,
};
