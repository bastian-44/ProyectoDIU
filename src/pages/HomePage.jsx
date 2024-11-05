import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/coursesData'

export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <main className="home-page__content">
        <h1>Tus Cursos</h1>
          <div className="home-page__course-list">
            {coursesData.map(course => (
              <CourseCard key={course.id} course={course} className="course-card"/>
            ))}
          </div>
        </main>
      </div>

    </>
  )
};

export default HomePage;
