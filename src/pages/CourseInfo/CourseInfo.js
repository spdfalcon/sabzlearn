import React from 'react'
import './CourseInfo.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
export default function CourseInfo() {
  return (
    <>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <Breadcrumb
    links={[
      {id:1,title:'خانه', to: ''},
      {id:2,title:'آموزش فرانت اند', to: 'category-info/frontend'},
      {id:3,title:'دوره متخصص جاوا اسکریپت', to: 'category-info/js-expert'},
    ]}
    ></Breadcrumb>
    <Footer></Footer>
    </>
  )
}
