import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import DashboardSkeleton from '../../Features/Travel/UI/Components/DashboardSkeleton'

const PublicRoute = () => {
        const {employee,isLoading}=useSelector((store)=>store.auth)
        if(isLoading) {
            return <DashboardSkeleton/>
        }
        if(employee){
            return <Navigate to="/main" replace/>
        }
  return  <Outlet/>

}

export default PublicRoute