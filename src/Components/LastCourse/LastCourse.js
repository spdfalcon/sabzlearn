import React from 'react'
import './LastCourse.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'
export default function LastCourse() {
    return (
        <>
            <div className="courses">
                <div className="container">
                    <SectionHeader
                        title='جدیدترین دوره ها'
                        desc='سکوی پرتاب شما به سمت موفقیت'
                        btnTitle='تمامی دوره ها'
                        btnHref='/courses'
                    />
                    <div className="courses-content">
                        <div className="container">
                            <div className="row">
                                <CourseBox></CourseBox>
                                <CourseBox></CourseBox>
                                <CourseBox></CourseBox>
                                <CourseBox></CourseBox>
                                <CourseBox></CourseBox>
                                <CourseBox></CourseBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
