import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import LastCourse from '../../Components/LastCourse/LastCourse'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PresellCourses from '../../Components/PresellCourses/PresellCourses'
import LastArticles from '../../Components/LastArticles/LastArticles'
export default function Index() {
  return (
    <div>
      <Header></Header>
      <LastCourse></LastCourse>
      <AboutUs></AboutUs>
      <PopularCourses></PopularCourses>
      <PresellCourses></PresellCourses>
      <LastArticles></LastArticles>
    </div>
  )
}
