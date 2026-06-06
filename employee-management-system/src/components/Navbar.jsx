import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>Employee Management System</h2>
      </div>

      <div className="navbar-right">
        <span>Welcome Admin</span>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-image"
        />
      </div>
    </header>
  );
}

export default Navbar;