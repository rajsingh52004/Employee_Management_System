import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">

      <div className="logo">
        EMS
      </div>

      <nav className="sidebar-menu">

        <Link
          to="/dashboard"
          className={
            location.pathname === "/dashboard"
              ? "active"
              : ""
          }
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          className={
            location.pathname === "/employees"
              ? "active"
              : ""
          }
        >
          Employees
        </Link>

        <Link
          to="/add-employee"
          className={
            location.pathname === "/add-employee"
              ? "active"
              : ""
          }
        >
          Add Employee
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;