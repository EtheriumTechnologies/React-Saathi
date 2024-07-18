import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import UniversityDashboard from './src/screens/UniversityDashboard/UniversityDashboard'
import UniEvents from './src/screens/UniversityDashboard/UniEvents'
import UniBuddies from './src/screens/UniversityDashboard/UniBuddies'
import UniTutorial from './src/screens/UniversityDashboard/UniTutorial'
import UniSettings from './src/screens/UniversityDashboard/UniSettings'
import UniStudents from './src/screens/UniversityDashboard/UniStudents'
import UniStudentDetails from './src/screens/UniversityDashboard/UniStudentDetails'
import UniversityPage from './src/screens/AdminDashboard/UniversityPage'

const Router = () => {
  return (
    <Routes>
   {/* Dashboard Pages */}
   <Route path='/uni-dashboard' element={<UniversityDashboard />} />
   <Route path='/uni-events'  element={<UniEvents/>} /> 
   <Route path='/uni-buddies'  element={<UniBuddies/>} />
   <Route path='/uni-tutorial'  element={<UniTutorial/>} />
   <Route path='/uni-tutorial'  element={<UniversityPage/>} />
   <Route path='/uni-settings'  element={<UniSettings/>} />
   <Route path='/uni-students'  element={<UniStudents/>} />  
   <Route path='/uni-students/:id'  element={<UniStudentDetails/>} />  
   </Routes>
  )
}

export default Router