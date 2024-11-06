import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MainNavbar from './MainNavbar';
import CoursePage from '../pages/CoursePage';
import CourseMain from './CourseMain';
import Forum from './Forum/Forum';


const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <MainNavbar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/courses/:courseId' element={<CoursePage />} >
              <Route index element={<CourseMain />} /> {/* Default view */}
              <Route path='forum' element={<Forum />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
