import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Category from "./pages/Caregory/Category"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Index from "./pages/Index/Index"
import Courses from "./pages/Courses/Courses"
const routes = [
    {path:'/' , element: <Index></Index> },
    {path:'/course-info/:courseName' , element: <CourseInfo></CourseInfo> },
    {path:'/category-info/:categoryName' , element: <Category></Category> },
    {path:'/article-info/:articleName' , element: <ArticleInfo></ArticleInfo> },
    {path:'/courses' , element: <Courses></Courses> },
]


export default routes