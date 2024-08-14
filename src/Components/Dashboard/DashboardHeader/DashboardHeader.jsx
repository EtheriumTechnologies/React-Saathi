import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './dashboard-header.css'
import logo from '../../../assets/uni-dashboard/logo.png'
import logo_mini from '../../../assets/uni-dashboard/logo_mini.png'
import admin from '../../../assets/uni-dashboard/admin.png'


const DashboardHeader=({toggleSidebar,setToggleSidebar})=>{

    return(
        <div className="dashboard_header">
            <div>
                <div className={`dashboard_header_logo hidden ${toggleSidebar? 'md:block' : ''}`} style={{width:'250px'}}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={`dashboard_header_logo block ${toggleSidebar? 'md:hidden':''}`} style={{width:'70px'}}>
                    <img src={logo_mini} alt="logo" />
                </div>
            </div>
            

            <div className="flex items-center justify-between dashboard_header_right">
                <div className="flex items-center gap-3">
                    <div className="cursor-pointer dashboard_header_menu" onClick={()=>setToggleSidebar(!toggleSidebar)}>
                        {toggleSidebar?<i class="ri-menu-3-line"></i>:<i class="ri-menu-2-line"></i>}
                    </div>

                    <div className="items-center gap-3 hidden md:flex dashboard_header_search">
                        <i class="ri-search-line"></i>
                        <form>
                            <input type="search" placeholder="Search"/>
                        </form>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="dashboard_header_right_logo"><i class="ri-message-line"></i></div>
                    <div className="dashboard_header_right_logo"><i class="ri-notification-2-line"></i></div>
                    <div className="dashboard_header_right_logo"><i class="ri-settings-3-line"></i></div>
                    <div className="admin_header_user"><img src={admin}/></div>
                </div>
            </div>
        </div>
    )
}


export default DashboardHeader;