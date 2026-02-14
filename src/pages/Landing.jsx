import { Link } from "react-router-dom";
import bgImage from "../assets/background.jpg";

function Landing() {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "50px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
    backdropFilter: "blur(5px)",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 30px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "white",
    color: "#0077ff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          INTERVIEW ACE
        </h1>
        <p style={{ fontSize: "18px" }}>
          Prepare smarter. Track weaknesses. Ace interviews.
        </p>

        <Link to="/login">
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;