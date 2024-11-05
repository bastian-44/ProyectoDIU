import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import CourseNavbar from '../components/CourseNavbar';
import LightBulbOn from '../assets/light-on.png';
import LightBulbOff from '../assets/light-off.png';
import coursesData from '../data/coursesData';

export const CoursePage = () => {
  const { courseId } = useParams();
  const course = coursesData.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <p>El curso no existe</p>;
  }

  return (
    <div className='course-page'>
      
      <h1>{course.semester} {course.initials} {course.title} </h1> 
      <CourseNavbar />
      <div className="course-page__content">
      <Outlet /> {/* This renders nested routes (home, forum, grades..) */}
      </div>
      <br/>
    </div>
  )
};

export default CoursePage;
