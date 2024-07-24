import React from 'react';

function ProfessorTable() {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Joining Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="profile1.jpg" alt="Profile" className="table-avatar" /></td>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Female</td>
            <td>B.A, B.C.A</td>
            <td>987 654 3210</td>
            <td>info@example.com</td>
            <td>2020/07/25</td>
            <td>
              <button className="btn btn-primary btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ProfessorTable;
