import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './src/screens/Admin/AdminDashboard'


const Router = () => {
  return (
    <Routes >
   {/* Dashboard Pages */}
   <Route  path='/' element={<AdminDashboard />} />
   </Routes>
  )
}

export default Router