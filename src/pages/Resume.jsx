import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Resume() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div style={containerStyle}>
      <h2>Upload Resume</h2>
      <input type="file" onChange={handleUpload} />

      {fileName && <p>Uploaded: {fileName}</p>}

      <button style={buttonStyle} onClick={() => navigate("/dashboard")}>
        Save
      </button>
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

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
};

export default Resume;
