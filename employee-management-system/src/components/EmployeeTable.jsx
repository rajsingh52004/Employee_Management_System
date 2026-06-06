import { useEffect, useState } from "react";
import employeeService from "../services/employeeServices.js";
import "../styles/EmployeeTable.css";

function EmployeeTable({ searchTerm }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response =
        await employeeService.getAllEmployees();

      setEmployees(response.data);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await employeeService.deleteEmployee(id);

      loadEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      `${employee.firstName} ${employee.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>

                <td>
                  {employee.firstName} {employee.lastName}
                </td>

                <td>{employee.email}</td>

                <td>{employee.department}</td>

                <td>₹ {employee.salary}</td>

                <td>{employee.phone}</td>

                <td>
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteEmployee(employee.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;