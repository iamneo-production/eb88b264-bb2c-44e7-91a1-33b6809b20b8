import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios"; // Import Axios library
import PersistentDrawerLeft from "./Drawer";
import { Navigate, useNavigate } from "react-router-dom";

const PayrollManagement = () => {
  const css = require("../css/home.css").toString();
  const navigate=useNavigate();
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", salary: 50000 ,type:"Manager"},
    { id: 2, name: "Jane Smith", salary: 60000,type:"Load" },
    // Add more sample employee data as needed
  ]);

  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    salary: 0,
    type:"",
    accountno:0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = () => {
    if (!newEmployee.id || !newEmployee.name || !newEmployee.salary) {
      alert("Please fill in all fields");
      return;
    }
  const token = localStorage.getItem("token");

    // Send the new employee data to the server using Axios
    axios
      .post("http://localhost:8080/emp", {
        emp_id: newEmployee.id,
        emp_name: newEmployee.name,
        emp_salary: newEmployee.salary,
        emp_type: newEmployee.type,
        emp_acc_no: newEmployee.accountno,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "cache-control": "no-cache",
        }
      })
      .then((response) => {
        console.log("Employee added successfully");
        navigate("/home")
        // If the server response contains the updated list of employees, update the state
        if (response.data && Array.isArray(response.data)) {
          console.log(response.data);
          setEmployees(response.data);
        }
        // Clear the form fields
        setNewEmployee({
          id: "",
          name: "",
          salary: 0,
          type: "",
          accountno: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Failed to add employee. Please try again later.");
      });
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <Helmet>{css}</Helmet>
      <div className="pie3">
        <h1>Payroll Management System</h1>
        <div className="align3">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>${employee.salary}</td>
                  <td>{employee.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Add New Employee</h2>
          <label>
            Employee ID:
            <input
              type="number"
              name="id"
              value={newEmployee.id}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Salary:
            <input
              type="number"
              name="salary"
              value={newEmployee.salary}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Employee Designation:
            <input
              type="text"
              name="type"
              value={newEmployee.type}
              onChange={handleInputChange}
            />
          </label>
          <br></br>
          <label>
            Employee AccNo:
            <input
              type="number"
              name="accountno"
              value={newEmployee.accountno}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={addEmployee}>Add Employee</button>
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;
