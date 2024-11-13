import React from 'react';
import { NavLink } from 'react-router-dom';


const CourseCard = ({ course }) => {
    return (
        <NavLink to={`/courses/${course.id}`} className='course-card'>
            <div className='course-card__content'>
                <h2 className="course-card__title">{course.title}</h2>
                <p className="course-card__department">{course.department}</p>
                <p className="course-card__initials">{course.initials}</p>
                <p className="course-card__semester">{course.semester}</p>
                <p className="course-card__section">Paralelo: {course.section}</p>
                <p className="course-card__description">{course.description}</p>
            </div>
        </NavLink>
    );
};

export default CourseCard;