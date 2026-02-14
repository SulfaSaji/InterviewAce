import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };

  return (
    <div style={containerStyle}>
      <h2>Signup</h2>
      <input placeholder="Name" style={inputStyle} />
      <input placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle} onClick={handleSignup}>
        Signup
      </button>

      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #4facfe, #00f2fe)",
  color: "white",
};

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "250px",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};

export default Signup;
