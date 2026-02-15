import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImage from "../assets/background.jpg"; // background image
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
  }, [navigate]);

  const containerStyle = {
    minHeight: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    paddingTop: "60px", // leave space for navbar
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backdropFilter: "brightness(0.85)", // improves readability
    minHeight: "calc(100vh - 60px)",
  };

  const profileStyle = {
    width: "90%", // almost full width
    maxWidth: "800px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // light transparent bg
    color: "#333",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    marginBottom: "40px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "15px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0077ff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "200px",
    transition: "transform 0.2s",
  };

  return (
    <div style={containerStyle}>
      <Navbar />

      <div style={contentStyle}>
        <div style={profileStyle}>
          <h2>Profile Details</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>

        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => navigate("/resume")}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Upload Resume
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/mock")}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Generate Mock Questions
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/analytics")}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
