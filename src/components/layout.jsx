import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MainNavbar from './MainNavbar';
import CoursePage from '../pages/CoursePage';
import CourseMain from './CourseMain';
import Forum from './Forum/Forum';
import Calendar from './Calendar/Calendar';
import Material from  './Material';
import Grades from './Grades';
import Deliverables from './Deliverables/Deliverables';
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
              <Route path='exam-dates' element={<Calendar />} />
              <Route path='materials' element={<Material />} />
              <Route path='grades' element={<Grades />} />
              <Route path='deliverables' element={<Deliverables />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
