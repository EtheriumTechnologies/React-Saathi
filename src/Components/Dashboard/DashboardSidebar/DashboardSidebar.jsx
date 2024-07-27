import React from 'react'
import {NavLink} from 'react-router-dom'
import './dashboard-sidebar.css'

const DashboardSidebar=({toggleSidebar})=>{
    return(
        <div className="dashboard_sidebar" style={{width:toggleSidebar?'250px':'70px'}}>
            <div className="dashboard_sidebar_section">
                <div className={`dashboard_sidebar_section_title ${toggleSidebar ? '' : 'hidden'}`}>
                    <p>MAIN MENU</p>
                </div>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'dashboard_sidebar_element active' : 'dashboard_sidebar_element')} style={{justifyContent:toggleSidebar?'':'center'}}>
                    <div className="flex items-center gap-2 dashboard_sidebar_element_main">
                        <i className="la la-tachometer-alt"></i>
                        {toggleSidebar?<p>Dashboard</p>:<></>}
                    </div>
                    {toggleSidebar?<div className="dashboard_sidebar_element_arrow"><i class="ri-arrow-right-s-fill"></i></div>:<></>}  
                </NavLink>
                <NavLink to="/dash-professors" className={({ isActive }) => (isActive ? 'dashboard_sidebar_element active' : 'dashboard_sidebar_element')} style={{justifyContent:toggleSidebar?'':'center'}}>
                    <div className="flex items-center gap-2 dashboard_sidebar_element_main">
                        <i className="la la-chalkboard-teacher"></i>
                        {toggleSidebar?<p>Professors</p>:<></>}
                    </div>
                    {toggleSidebar?<div className="dashboard_sidebar_element_arrow"><i class="ri-arrow-right-s-fill"></i></div>:<></>}    
                </NavLink>
                <NavLink to="/dash-students" className={({ isActive }) => (isActive ? 'dashboard_sidebar_element active' : 'dashboard_sidebar_element')} style={{justifyContent:toggleSidebar?'':'center'}}>
                    <div className="flex items-center gap-2 dashboard_sidebar_element_main">
                        <i className="la la-user-graduate"></i>
                        {toggleSidebar?<p>Students</p>:<></>}
                    </div>
                    {toggleSidebar?<div className="dashboard_sidebar_element_arrow"><i class="ri-arrow-right-s-fill"></i></div>:<></>}    
                </NavLink>
            </div>
        </div>
    )
}


export default DashboardSidebar;