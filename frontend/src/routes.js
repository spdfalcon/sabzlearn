import ArticleInfo from "./pages/ArticleInfo/ArticleInfo"
import Category from "./pages/Caregory/Category"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Index from "./pages/Index/Index"
import Courses from "./pages/Courses/Courses"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
const routes = [
    {path:'/' , element: <Index></Index> },
    {path:'/course-info/:courseName' , element: <CourseInfo></CourseInfo> },
    {path:'/category-info/:categoryName' , element: <Category></Category> },
    {path:'/article-info/:articleName' , element: <ArticleInfo></ArticleInfo> },
    {path:'/courses' , element: <Courses></Courses> },
    {path:'/Login' , element: <Login></Login> },
    {path:'/Register' , element: <Register></Register> },
]


export default routes