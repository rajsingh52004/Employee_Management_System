import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MainLayout>
      <h1>Employees</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <EmployeeTable searchTerm={searchTerm} />
    </MainLayout>
  );
}

export default Employees;