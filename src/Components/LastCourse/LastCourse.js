import React from 'react'
import './LastCourse.css'
import SectionHeader from '../SectionHeader/SectionHeader'
export default function LastCourse() {
    return (
        <>
            <div class="courses">
                <div class="container">
                    <SectionHeader 
                    title='جدیدترین دوره ها'
                    desc='سکوی پرتاب شما به سمت موفقیت'
                    btnTitle='تمامی دوره ها'
                    />
                </div>
            </div>
        </>
    )
}
