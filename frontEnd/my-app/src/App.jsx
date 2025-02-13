// import React from "react";
// import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
// import NavBar from "./components/NavBar";

// import HeroSectionStudent from "./pages/student/HeroSectionStudent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Major from "./pages/Major";
// import HomeHero from "./components/HomeHero";
import Dashboard from "./pages/instructor/Dashboard";
import Sidebar from "./pages/instructor/SideBar";
import CourseTable from "./pages/instructor/course/CourseTable";
import AddCourse from "./pages/instructor/course/AddCourse";
import EditCourse from "./pages/instructor/course/EditCourse";
import Home from "./pages/Home";
import AllCoursesPage from "./pages/AllCoursesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CreateLecture from "./pages/instructor/lecture/CreateLecture";
import EditLecture from "./pages/instructor/lecture/EditLecture";
import CourseDetails from "./pages/student/CourseDetails";
import Footer from "./components/Footer";
import CourseProgress from "./pages/student/CourseProgress";
// import { Sidebar } from "./components/ui/sidebar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
          <Home/>
            {/* <HomeHero/>
            <HeroSectionStudent />
            <Courses/> */}
          </>
        ),
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/all-courses",
        element: <AllCoursesPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "major",
        element: <Major />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "course-detail/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "course-progress/:courseId",
        element: <CourseProgress />,
      },
      // Instructor Routes Start form Here.
      {
        path: "instructor",
        element: (
          // <AdminRoute>
            <Sidebar/>
          // </AdminRoute>
        ),
        children:[
          {
            path:'dashboard',
            element:<Dashboard/>
          },
          {
            path:'course',
            element:<CourseTable/>
          },
          {
            path:'course/create',
            element:<AddCourse/>
          },
          {
            path:'course/:courseId',
            element:<EditCourse/>
          },
          {
            path:'course/:courseId/lecture/',
            element:<CreateLecture/>
          },
          {
            path:'course/:courseId/lecture/:lectureId',
            element:<EditLecture/>
          },
        ]
      }
    ],
  },
]);
const App = () => {
  return (
    <>
      <main>
        {/*       
         <NavBar/>
          <HeroSectionStudent/>
        <Login/> */}
        <RouterProvider router={appRouter} />
        
      </main>
    </>
  );
};

export default App;
