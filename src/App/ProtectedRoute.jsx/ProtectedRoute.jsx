import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import AuthSkeleton from '../../Features/Auth/UI/Component/AuthSkeleton'

const ProtectedRoute = () => {
    const {employee,isLoading}=useSelector((store)=>store.auth)
     if (isLoading) {
    return <AuthSkeleton/>;
  }
    if(!employee){
       return  <Navigate to={"/"} replace/>
    }
  return  <Outlet/>

  
}

export default ProtectedRoute