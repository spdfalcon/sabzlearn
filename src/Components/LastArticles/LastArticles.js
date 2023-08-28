import React from 'react'
import './LastArticles.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import ArticleBox from '../ArrticleBox/ArticleBox'
export default function LastArticles() {
    return (
        <>
            <section class="articles">
                <div class="container">
                    <SectionHeader
                        title='جدیدترین مقاله ها'
                        desc='پیش به سوی ارتقای دانش'
                        btnTitle='تمامی مقاله ها'
                    >
                    </SectionHeader>
                    <div class="articles__content">
                        <div class="row">
                            <ArticleBox
                             cover='images/blog/3.jpg'
                              title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'>
                              </ArticleBox>
                            <ArticleBox
                             cover='images/blog/3.jpg'
                              title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'>
                              </ArticleBox>
                            <ArticleBox
                             cover='images/blog/3.jpg'
                              title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون' desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'>
                              </ArticleBox>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
