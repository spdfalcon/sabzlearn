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
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
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

          <div className="courses-pagination">
            <ul className="courses__pagination-list">
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  2
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
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
