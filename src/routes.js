import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Category from "./pages/Caregory/Category"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Index from "./pages/Index/Index"
const routes = [
    {path:'/' , element: <Index></Index> },
    {path:'/course-info/:courseName' , element: <CourseInfo></CourseInfo> },
    {path:'/category-info/:categoryName' , element: <Category></Category> },
    {path:'/article-info/:articleName' , element: <ArticleInfo></ArticleInfo> },
]


export default routes