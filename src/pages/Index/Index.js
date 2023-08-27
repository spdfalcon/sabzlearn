import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import LastCourse from '../../Components/LastCourse/LastCourse'
import AboutUs from '../../Components/AboutUs/AboutUs'
export default function Index() {
  return (
    <div>
      <Header></Header>
      <LastCourse></LastCourse>
      <AboutUs></AboutUs>
    </div>
  )
}
