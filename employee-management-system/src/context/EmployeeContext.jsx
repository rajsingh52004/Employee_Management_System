import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];

    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        ...employee,
      },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;