import React from 'react'; 
import { NavLink } from 'react-router-dom'

const CourseNavbar = () => {
    <nav className="course-navbar">
        <a href="/forum" className="course-navbar__link">Foro</a>
        <a href="/calendar" className="course-navbar__link">Calendario</a>
        <a href="/study-material" className="course-navbar__link">Material</a>
        <a href="/califications" className="course-navbar__link">Calificaciones</a>
    </nav>
};

export default CourseNavbar;