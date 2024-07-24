import React ,{useState} from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import ProfessorTable from '../../Components/Admin/ProfessorTable/ProfessorTable';
import TopNavbar from '../../Components/Admin/TopNavbar/TopNavbar';
import '../../Styles/AdminDashboard.css'
const AdminDashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="d-flex">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`content ${isSidebarOpen ? 'w-75' : 'w-100'}`}>
          <TopNavbar toggleSidebar={toggleSidebar} />
          <div className="container-fluid mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">List View</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Grid View</a>
              </li>
            </ul>
            <ProfessorTable />
          </div>
        </div>
      </div>
    )
}

export default AdminDashboard