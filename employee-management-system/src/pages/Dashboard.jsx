import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <MainLayout>

      <h1 className="dashboard-title">
        Dashboard
      </h1>

      <div className="dashboard-cards">

        <DashboardCard
          title="Total Employees"
          value="120"
        />

        <DashboardCard
          title="Active Employees"
          value="108"
        />

        <DashboardCard
          title="Departments"
          value="8"
        />

        <DashboardCard
          title="New Employees"
          value="12"
        />

      </div>

    </MainLayout>
  );
}

export default Dashboard;