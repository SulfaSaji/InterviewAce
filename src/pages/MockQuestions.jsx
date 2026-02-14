import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bgImage from "../assets/background.jpg";

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
      <h1 style={headingStyle}>Mock Interview</h1>

      <div style={cardStyle}>
        <p style={questionStyle}>Questions :</p>
        <textarea
          rows="8"
          style={textareaStyle}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />
      </div>

      <button style={submitButtonStyle} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

// Container: full page with background image, center content, no horizontal scroll
const containerStyle = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  boxSizing: "border-box",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  overflowX: "hidden",
};

// Page heading
const headingStyle = {
  fontSize: "32px",
  marginBottom: "30px",
  textAlign: "center",
  textShadow: "0 2px 6px rgba(14, 1, 1, 0.4)",
};

// White card containing question and textarea
const cardStyle = {
  width: "90%",
  maxWidth: "800px",
  backgroundColor: "white",
  color: "#0e0101", // black text inside card
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
  marginBottom: "30px",
  overflowY: "auto",
  maxHeight: "400px", // vertical scroll if content exceeds
  boxSizing: "border-box",
};

// Question text
const questionStyle = {
  marginBottom: "10px",
  fontWeight: "bold",
  fontSize: "18px",
};

// Textarea for answer
const textareaStyle = {
  width: "100%",
  height: "150px",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #0a0101",
  resize: "vertical",
  fontSize: "16px",
  color: "#0e0101", // ensure textarea text is black
  boxSizing: "border-box",
};

// Submit button below card
const submitButtonStyle = {
  padding: "15px 35px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "green",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
  transition: "transform 0.2s, background-color 0.2s",
};

export default MockQuestions;
