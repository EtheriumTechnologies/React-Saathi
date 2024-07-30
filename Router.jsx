import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AdminDashboard from './src/screens/Admin/AdminDashboard'
import Students from './src/screens/Admin/Students'
import Professors from './src/screens/Admin/Professors'


const Router = () => {
  return (
    <Routes >
      {/* Dashboard Pages */}
      <Route path='/' element={<Navigate to={'/dashboard'} />} />
      <Route path='/dashboard' element={<AdminDashboard />} />
      <Route path='/dash-students' element={<Students />} />
      <Route path='/dash-professors' element={<Professors />} />
   </Routes>
  )
}

export default Router