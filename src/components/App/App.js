import { useDispatch } from 'react-redux';
import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar/AppBar.js';
import { fetchCurrentUser } from 'redux/auth/auth-operation.js';

// import Navigation from '../../components/Navigation/Navigation';
// import UserMenu from '../../components/UserMenu/UserMenu';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.js'));
const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage/PhonebookPage.js')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.js'));
const RegisterView = lazy(() =>
  import('../../pages/RegisterView/RegisterView.js')
);

// const Reviews = lazy(() => import('../../pages/Reviews/Reviews.js'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <AppBar />
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="user" element={<UserMenu />} /> */}
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<PhonebookPage />} />
          <Route path="*" element={<Navigate to="/ " />} />
        </Routes>
      </Suspense>
    </>
  );
}
