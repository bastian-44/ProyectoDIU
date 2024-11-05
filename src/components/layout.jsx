import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MainNavbar from './MainNavbar';
import CoursePage from '../pages/CoursePage';

import Header from '../components/Header';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <MainNavbar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/courses/:courseId' element={<CoursePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
