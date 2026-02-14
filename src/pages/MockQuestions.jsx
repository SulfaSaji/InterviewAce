import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MockQuestions() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    const score = Math.floor(Math.random() * 40) + 60;
    localStorage.setItem("score", score);
    navigate("/dashboard");
  };

  return (
    <div style={containerStyle}>
      <h2>Mock Interview</h2>
      <p>Tell me about yourself?</p>

      <textarea
        rows="5"
        style={{ width: "300px" }}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  padding: "40px",
  background: "linear-gradient(to right, #4facfe, #00f2fe)",
  color: "white",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
};

export default MockQuestions;
