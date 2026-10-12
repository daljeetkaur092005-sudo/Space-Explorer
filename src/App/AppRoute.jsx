import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router"
import MainLayout from '../Layout/MainLayout'
import HomePage from '../Features/Travel/UI/Pages/HomePage'
import ExplorePage from '../Features/Travel/UI/Pages/ExplorePage'
import EventsPage from '../Features/Travel/UI/Pages/EventsPage'
import SavesPage from '../Features/Travel/UI/Pages/DetailPage'
import DetailPage from '../Features/Travel/UI/Pages/DetailPage'
const AppRoute = () => {
    const router=createBrowserRouter([
            {
                path:"/",
                element:<MainLayout/>,
                children:[
                    {
                        path:"",
                        element:<HomePage/>
                    },
                      {
                        path:"explore",
                        element:<ExplorePage/>
                    },
                      {
                        path:"events",
                        element:<EventsPage/>
                    },
                      {
                        path:"detail",
                        element:<DetailPage/>
                    }
                ]
            }
    ])
  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoute