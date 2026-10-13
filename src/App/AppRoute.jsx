import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Features/Travel/UI/Pages/HomePage";
import ExplorePage from "../Features/Travel/UI/Pages/ExplorePage";
import EventsPage from "../Features/Travel/UI/Pages/EventsPage";
import DetailPage from "../Features/Travel/UI/Pages/DetailPage";
import AuthLayout from "../Layout/AuthLayout";
import LoginPage from "../Features/Travel/UI/Pages/LoginPage";
import RegisterPage from "../Features/Travel/UI/Pages/RegisterPage";
import { currentEmployee } from "../Features/Auth/State/AuthAction";
import { useDispatch } from "react-redux";
import PublicRoute from "./ProtectedRoute.jsx/PublicRoute";
import ProtectedRoute from "./ProtectedRoute.jsx/ProtectedRoute";
const AppRoute = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
{
  path:"/",
  element:<PublicRoute/>,
  children:[
        {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]

  
},

 {
  path:"",
  element:<ProtectedRoute/>,
  children:[
       {
      path: "main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "explore",
          element: <ExplorePage />,
        },
        {
          path: "events",
          element: <EventsPage />,
        },
        {
          path: "detail",
          element: <DetailPage />,
        },
      ],
    },
  ]
 }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
