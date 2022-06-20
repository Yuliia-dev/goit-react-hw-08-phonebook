import { useDispatch, useSelector } from 'react-redux';
import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import Spinner from 'components/Spinner/Spinner.js';
import AppBar from 'components/AppBar/AppBar.js';
import { fetchCurrentUser } from 'redux/auth/auth-operation.js';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute.js';
import PublicRoute from 'components/PublicRoute/PublicRoute.js';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.js'));
const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage/PhonebookPage.js')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.js'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage.js')
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute navigateTo="/login">
                <PhonebookPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/ " />} />
        </Routes>
      </Suspense>
    </>
  );
}
