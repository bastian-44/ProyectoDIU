import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<<<<<<< Updated upstream
import HomePage from '../pages/home_page'
import ForumPage from '../pages/forum_page'

import NavBar from '../components/nav_bar'
=======
import HomePage from '../pages/HomePage';
import MainNavbar from './MainNavbar';
import CoursePage from '../pages/CoursePage';
import Forum from './Forum/forum';
import PostDetail from './Forum/post_detail';
>>>>>>> Stashed changes

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
<<<<<<< Updated upstream
            <Route path='/forum' element={<ForumPage />} />
=======
            <Route path='/courses/:courseId' element={<CoursePage />}>
              <Route path='forum' element={<Forum />} >
                <Route path ='post/:id' element={<PostDetail/>} /> 
              </Route>
            </Route>
>>>>>>> Stashed changes
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
