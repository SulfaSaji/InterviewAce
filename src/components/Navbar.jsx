import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navStyle = {
    backgroundColor: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#0077ff",
    fontWeight: "bold",
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={navStyle}>
      <div>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/resume" style={linkStyle}>Resume</Link>
        <Link to="/mock" style={linkStyle}>Mock</Link>
        <Link to="/analytics" style={linkStyle}>Analytics</Link>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
