import { createRoot } from 'react-dom/client'
import "./glopals.css"
import Layout from './sections/Layout/Layout.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './sections/Homepage/App.tsx'
import Opinions from './sections/Opinions/Opinions.tsx'
import CoursePageContainer from './sections/Course/CoursePageContainer.tsx'
import Questions from './sections/Questions/Questions.tsx'
import UserPageContainer from './sections/Userpage/UserPageContainer.tsx'
import AuthContainer from './sections/Auth/AuthContainer.tsx'
import Login from './components/Auth/Login.tsx'
import SignUp from './components/Auth/SignUp.tsx'
import DashboardHome from './Dashboard/DashboardHome.tsx'
import DataPreview from './Dashboard/DataPreview.tsx'
import User from './Dashboard/User.tsx'
import Course from './Dashboard/Course/Course.tsx'
import Teacher from './Dashboard/Teacher/Teacher.tsx'
import AddTeacher from './Dashboard/Teacher/AddTeacher.tsx'
import AddCourse from './Dashboard/Course/AddCourse.tsx'
import AddVideo from './Dashboard/Course/AddVideo.tsx'
import Courses from './components/Course/Courses.tsx'
import WatchContainer from './sections/WatchCourse/WatchContainer.tsx'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<App />} />
                <Route path='/opinions' element={<Opinions />} />
                <Route path='course/:type' element={<Courses />}></Route>
                <Route path='/course/view/:courseName' element={<CoursePageContainer />} />
                <Route path='/course/watch/:courseid' element={<WatchContainer />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/user/:userid' element={<UserPageContainer />}></Route>
                <Route path='/dashboard' element={<DashboardHome />}>
                    <Route path='/dashboard/:type' element={<DataPreview />}></Route>
                </Route>
                <Route path='control'>
                    <Route path='user/:id' element={<User />}></Route>
                    <Route path='teacher/:id' element={<Teacher />}></Route>
                    <Route path='course/:id' element={<Course />}></Route>
                    <Route path='addteacher' element={<AddTeacher />}></Route>
                    <Route path='addcourse' element={<AddCourse />}></Route>
                    <Route path='addvideo' element={<AddVideo />}></Route>
                </Route>
            </Route>
            <Route path='/auth' element={<AuthContainer />}>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<SignUp />}></Route >
            </Route>
        </Route >
    )
)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
