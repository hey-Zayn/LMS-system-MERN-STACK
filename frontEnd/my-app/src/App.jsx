import React from "react";
// import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
// import NavBar from "./components/NavBar";

import HeroSectionStudent from "./pages/student/HeroSectionStudent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Major from "./pages/Major";
import HomeHero from "./components/HomeHero";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HomeHero/>
            <HeroSectionStudent />
            {/* Course */}
            <Courses/>
          </>
        ),
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
