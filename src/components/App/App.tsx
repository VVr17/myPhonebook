import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useAppDispatch } from 'redux/hooks';

// JS Lazy loading
const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const NewContact = lazy(() => import('pages/NewContact/NewContact'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshingUser = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshingUser ? (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <RestrictedRoute component={Home} redirectTo="/contacts" />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={Register}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute component={Login} redirectTo="/contacts" />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              s
              <Route
                path="/newContact"
                element={
                  <PrivateRoute component={NewContact} redirectTo="/login" />
                }
              />
            </Route>
          </Routes>
          <ToastContainer
            autoClose={3000}
            theme="colored"
            position="bottom-right"
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
