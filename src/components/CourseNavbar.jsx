import React from 'react'; 
import { NavLink } from 'react-router-dom';

const CourseNavbar = () => {
    
    const CourseNavLinkClass = ({ isActive }) => {
        const classes = ['course-navbar__link'];
        if (isActive) classes.push('course-navbar__link--active');
        return classes.join(' ');
    };

    return(
    <nav className='course-navbar'>
      <NavLink to='' end className={CourseNavLinkClass}>Inicio</NavLink>
      <NavLink to='forum' className={CourseNavLinkClass}>Foros</NavLink>
      <NavLink to='exam-dates' className={CourseNavLinkClass}>Calendario</NavLink>
      <NavLink to='deliverables' className={CourseNavLinkClass}>Entregas </NavLink>
      <NavLink to='materials' className={CourseNavLinkClass }>Material de estudio</NavLink>
      <NavLink to='grades' className={CourseNavLinkClass}>Calificaciones</NavLink>
    </nav>
  );

};

export default CourseNavbar;