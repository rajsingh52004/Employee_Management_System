import MainLayout from "../layouts/MainLayout";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/AddEmployee.css";

function AddEmployee() {
  return (
    <MainLayout>

      <div className="add-employee-container">

        <h1>Add Employee</h1>

        <EmployeeForm />

      </div>

    </MainLayout>
  );
}

export default AddEmployee;