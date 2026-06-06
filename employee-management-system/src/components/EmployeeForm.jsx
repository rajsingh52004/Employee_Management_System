import { useState } from "react";
import employeeService from "../services/employeeServices.js";
import "../styles/AddEmployee.css";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    salary: "",
    phone: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await employeeService.addEmployee(employee);

      alert("Employee Added Successfully");

      setEmployee({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        salary: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error Adding Employee");
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employee.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={employee.phone}
        onChange={handleChange}
      />

      <button type="submit" className="save-btn">
        Save Employee
      </button>
    </form>
  );
}

export default EmployeeForm;