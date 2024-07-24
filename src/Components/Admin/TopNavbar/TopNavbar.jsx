import React from 'react';

function TopNavbar({ toggleSidebar }) {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button className="btn btn-link text-white" onClick={toggleSidebar}>
            <i className="la la-bars"></i>
          </button>
          <a className="navbar-brand d-flex align-items-center" href="#">
      
          </a>
          <form className="d-flex flex-grow-1 ">
          <input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search" />
        </form>
        </div>
     
        <div className="d-flex align-items-center">
          <i className="la la-moon text-white mx-2"></i>
          <i className="la la-comment-alt text-white mx-2"></i>
          <i className="la la-bell text-white mx-2"></i>
          <i className="la la-cog text-white mx-2"></i>
     
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
