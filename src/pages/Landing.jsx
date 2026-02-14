import { Link } from "react-router-dom";

function Landing() {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "white",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 25px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "white",
    color: "#0077ff",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1>Interview Preparation AI Assistant</h1>
      <p>Prepare smarter. Track weaknesses. Ace interviews.</p>

      <Link to="/login">
        <button style={buttonStyle}>Get Started</button>
      </Link>
    </div>
  );
}

export default Landing;
