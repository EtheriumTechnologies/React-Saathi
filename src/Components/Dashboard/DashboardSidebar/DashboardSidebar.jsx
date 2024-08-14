import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './dashboard-sidebar.css'




const DashboardSidebar=({toggleSidebar})=>{
    const [activeKey, setActiveKey] = useState(null);
    const [tab,setTab]=useState('dashboard')

    const handleToggle = (key,tab) => {
      setActiveKey(activeKey === key ? null : key);
      setTab(tab)
    };
   

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



                <div className="accordion" id="accordionExample">
          <div className="accordion-header" id="headingOne">
          <NavLink to="/dash-professors"   className={({ isActive }) => (isActive && tab == 'professors' ? 'dashboard_sidebar_element active' : 'dashboard_sidebar_element')} onClick={() => handleToggle("0",'professors')} style={{justifyContent:toggleSidebar?'':'center',cursor: 'pointer' }}>
                    <div className="flex items-center gap-2 dashboard_sidebar_element_main"  >
                        <i className="la la-chalkboard-teacher"></i>
                        {toggleSidebar?<p>Professors</p>:<></>}
                    </div>
                    {toggleSidebar?<div className="dashboard_sidebar_element_arrow"> {activeKey === "0" && tab == 'professors' ? <i className="ri-arrow-down-s-fill ml-auto"></i> : <i className="ri-arrow-right-s-fill ml-auto"></i>}</div>:<></>}   
                    {!toggleSidebar ? (
                <div className="submenu">
                  <ul>
                    <li><NavLink to="/dash-professors/all"><span>All Professors</span></NavLink></li>
                    <li><NavLink to="/dash-professors/add"><span>Add Professor</span></NavLink></li>
                    <li><NavLink to="/dash-professors/edit"><span>Edit Professor</span></NavLink></li>
                    <li><NavLink to="/dash-professors/profile"><span>Professor Profile</span></NavLink></li>
                  </ul>
                </div>
              ):null}

                </NavLink>
          </div>
          {toggleSidebar?    <div id="collapseOne" className={` ${activeKey === "0"&& tab == 'professors' ? 'show' : 'collapse '},`} data-bs-toggle="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li><NavLink to="/dash-professors/all" ><i className="las la-minus mr-1"></i><span>All Professors</span></NavLink></li>
                <li><NavLink to="/dash-professors/add"><i className="las la-minus mr-1"></i><span>Add Professor</span></NavLink></li>
                <li><NavLink to="/dash-professors/edit"><i className="las la-minus mr-1"></i><span>Edit Professor</span></NavLink></li>
                <li><NavLink to="/dash-professors/profile"><i className="las la-minus mr-1"></i><span>Professor Profile</span></NavLink></li>
              </ul>
            </div>
          </div>  :null}
       
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-header" id="headingOne">
          <NavLink to="/dash-professors"   className={({ isActive }) => (isActive && tab == 'students' ? 'dashboard_sidebar_element active' : 'dashboard_sidebar_element')} onClick={() => handleToggle("0",'students')} style={{justifyContent:toggleSidebar?'':'center',cursor: 'pointer' }}>
                    <div className="flex items-center gap-2 dashboard_sidebar_element_main"  >
                        <i className="la la-chalkboard-teacher"></i>
                        {toggleSidebar?<p>Students</p>:<></>}
                    </div>
                    {toggleSidebar?<div className="dashboard_sidebar_element_arrow"> {activeKey === "0" && tab == 'students' ? <i className="ri-arrow-down-s-fill ml-auto"></i> : <i className="ri-arrow-right-s-fill ml-auto"></i>}</div>:<></>}   
                    {!toggleSidebar ? (
                <div className="submenu">
                  <ul>
                    <li><NavLink to="/dash-professors/all"><span>All Students</span></NavLink></li>
                    <li><NavLink to="/dash-professors/add"><span>Add Student</span></NavLink></li>
                    <li><NavLink to="/dash-professors/edit"><span>Edit Student</span></NavLink></li>
                    <li><NavLink to="/dash-professors/profile"><span>Student Profile</span></NavLink></li>
                  </ul>
                </div>
              ):null}

                </NavLink>
          </div>
          {toggleSidebar?    <div id="collapseOne" className={` ${activeKey === "0" && tab == 'students' ? 'show' : 'collapse '},`} data-bs-toggle="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li><NavLink to="/dash-professors/all" ><i className="las la-minus mr-1"></i><span>All Students</span></NavLink></li>
                <li><NavLink to="/dash-professors/add"><i className="las la-minus mr-1"></i><span>Add Student</span></NavLink></li>
                <li><NavLink to="/dash-professors/edit"><i className="las la-minus mr-1"></i><span>Edit Student</span></NavLink></li>
                <li><NavLink to="/dash-professors/profile"><i className="las la-minus mr-1"></i><span>Student Profile</span></NavLink></li>
              </ul>
            </div>
          </div>  :null}
       
        </div>
            </div>
        </div>
    )
}


export default DashboardSidebar;