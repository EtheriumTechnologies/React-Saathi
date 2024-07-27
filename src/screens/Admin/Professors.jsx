import React, { useState, useEffect } from 'react';
import '../../Styles/professors.css';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar/DashboardSidebar';


const Professors= () => {

    const [toggleSidebar,setToggleSidebar] = useState(0);

    return (
        <div>
            <DashboardHeader setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
            <DashboardSidebar toggleSidebar={toggleSidebar}/>

            <div className={`admin_dashboard_main ml-[70px] ${toggleSidebar?'md:ml-[250px]':''}`}>
                  <p className="bg-red-300">Professors Content Here</p> 
            </div>
        </div>
    );
}

export default Professors;
