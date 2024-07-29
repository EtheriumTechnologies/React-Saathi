
import React from 'react';

function Sidebar({ isOpen }) {
  return (
    <nav className={`sidebar  navbar-expand-lg navbar-light bg-light ${isOpen ? 'open' : 'closed'} `}>
      <div className="d-flex flex-column align-items-center align-items-lg-start ">
        <div className="brand-logo   w-100 ">
        <a className="navbar-brand d-flex align-items-center   " href="#">
          <i className="la la-graduation-cap text-white text-3xl "></i>
          {isOpen && <span className="ms-2 text-white font-semibold text-2xl items-center ">EDUMIN</span>}
        </a>
        </div>
    
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <i className="la la-tachometer-alt"></i>
              {isOpen && <span className="ms-2">Dashboard</span>}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <i className="la la-calendar-alt"></i>
              {isOpen && <span className="ms-2">Event Management</span>}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <i className="la la-chalkboard-teacher"></i>
              {isOpen && <span className="ms-2">Professors</span>}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#">
              <i className="la la-user-graduate"></i>
              {isOpen && <span className="ms-2">Students</span>}
            </a>
          </li>
          {/* Add more navigation items here with icons */}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
