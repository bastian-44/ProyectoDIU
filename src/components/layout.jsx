import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import ForumPage from '../pages/forum_page'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/forum' element={<ForumPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
