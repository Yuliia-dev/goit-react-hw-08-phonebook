import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';

const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage/PhonebookPage.js')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.js'));
const SignupPage = lazy(() => import('../../pages/SignupPage/SignupPage.js'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.js'));
// const Reviews = lazy(() => import('../../pages/Reviews/Reviews.js'));

export default function App() {
  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Navigation />
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user" element={<UserMenu />} />
          <Route path="register" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<PhonebookPage />} />
          <Route path="*" element={<Navigate to="/ " />} />
        </Routes>
      </Suspense>
    </>
  );
}
