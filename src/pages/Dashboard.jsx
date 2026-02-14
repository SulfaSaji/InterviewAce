import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
  const storedName = localStorage.getItem("name");
  const storedEmail = localStorage.getItem("email");

  if (!storedName) {
    navigate("/login");
  } else {
    setName(storedName);
    setEmail(storedEmail);
  }
}, []);
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "white",
  };

  const contentStyle = {
    padding: "40px",
  };

  const cardStyle = {
    background: "white",
    color: "#333",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    margin: "10px 10px 0 0",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#0077ff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <Navbar />

      <div style={contentStyle}>
        <h2>Dashboard</h2>

        <div style={cardStyle}>
          <h3>Profile Details</h3>
           <p>Name: {name}</p>
           <p>Email: {email}</p>
        </div>

        <button style={buttonStyle} onClick={() => navigate("/resume")}>
          Upload Resume
        </button>

        <button style={buttonStyle} onClick={() => navigate("/mock")}>
          Generate Mock Questions
        </button>

        <button style={buttonStyle} onClick={() => navigate("/analytics")}>
          View Analytics
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
