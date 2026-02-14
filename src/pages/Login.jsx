import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <input placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>

      <p>
        Don't have account? <Link to="/signup">Signup</Link>
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

export default Login;