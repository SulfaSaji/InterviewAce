import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navStyle = {
    backgroundColor: "#ffffff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "#0077ff",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.2s",
  };

  const linkHover = (e) => {
    e.target.style.color = "#0056b3";
  };

  const linkLeave = (e) => {
    e.target.style.color = "#0077ff";
  };

  const logoutButtonStyle = {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff4d4f",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  };

  const handleLogoutHover = (e) => {
    e.target.style.backgroundColor = "#d9363e";
  };

  const handleLogoutLeave = (e) => {
    e.target.style.backgroundColor = "#ff4d4f";
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={navStyle}>
      <div>
        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseOver={linkHover}
          onMouseOut={linkLeave}
        >
          Dashboard
        </Link>
        <Link
          to="/resume"
          style={linkStyle}
          onMouseOver={linkHover}
          onMouseOut={linkLeave}
        >
          Resume
        </Link>
        <Link
          to="/mock"
          style={linkStyle}
          onMouseOver={linkHover}
          onMouseOut={linkLeave}
        >
          Mock
        </Link>
        <Link
          to="/analytics"
          style={linkStyle}
          onMouseOver={linkHover}
          onMouseOut={linkLeave}
        >
          Analytics
        </Link>
      </div>

      <button
        style={logoutButtonStyle}
        onClick={handleLogout}
        onMouseOver={handleLogoutHover}
        onMouseOut={handleLogoutLeave}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
