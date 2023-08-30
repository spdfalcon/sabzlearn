import React from 'react'
import './Courses.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'
import CourseBox from '../../Components/CourseBox/CourseBox'
export default function Courses() {
  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Breadcrumb
        links={[
          { id: 1, title: 'خانه', to: '' },
          { id: 2, title: 'تمام دوره ها', to: 'courses' },
        ]}
      ></Breadcrumb>
      <section class="courses">
        <div class="container">
          <div class="courses-content">
            <div class="container">
              <div class="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div class="courses-pagination">
            <ul class="courses__pagination-list">
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  <i class="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li class="courses__pagination-item">
                <a
                  href="#"
                  class="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  2
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}
