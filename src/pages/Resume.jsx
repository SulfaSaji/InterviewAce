import { useNavigate } from "react-router-dom";
import { useState } from "react";

import bgImage from "../assets/background.jpg"; // background image

function Resume() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [hoverBrowse, setHoverBrowse] = useState(false);
  const [hoverSave, setHoverSave] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "30px", fontSize: "28px" }}>UPLOAD RESUME</h2>

        <label
          htmlFor="resumeUpload"
          style={{
            ...browseButtonStyle,
            transform: hoverBrowse ? "scale(1.05)" : "scale(1)",
            backgroundColor: hoverBrowse ? "#005fcc" : "#0077ff",
          }}
          onMouseEnter={() => setHoverBrowse(true)}
          onMouseLeave={() => setHoverBrowse(false)}
        >
          Browse File
        </label>
        <input
          id="resumeUpload"
          type="file"
          onChange={handleUpload}
          style={{ display: "none" }}
        />

        {fileName && <p style={{ marginTop: "15px", fontSize: "18px" }}>Uploaded: {fileName}</p>}

        <button
          style={{
            ...saveButtonStyle,
            transform: hoverSave ? "scale(1.05)" : "scale(1)",
            backgroundColor: hoverSave ? "#28a745" : "green",
          }}
          onMouseEnter={() => setHoverSave(true)}
          onMouseLeave={() => setHoverSave(false)}
          onClick={() => navigate("/dashboard")}
        >
          Save
        </button>
      </div>
    </div>
  );
}

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

const cardStyle = {
  backgroundColor: "white",
  padding: "60px 50px", // increased padding
  borderRadius: "25px", // slightly more rounded
  textAlign: "center",
  boxShadow: "0 12px 30px rgba(0,0,0,0.3)", // stronger shadow
  minWidth: "500px", // bigger card width
};

const browseButtonStyle = {
  display: "inline-block",
  padding: "16px 35px", // bigger button
  fontSize: "18px", // larger text
  borderRadius: "10px",
  backgroundColor: "#0077ff",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
  marginBottom: "25px",
  transition: "transform 0.2s, background-color 0.2s",
};

const saveButtonStyle = {
  display: "block",
  margin: "25px auto 0 auto",
  padding: "16px 35px", // bigger save button
  fontSize: "18px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "green",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.2s, background-color 0.2s",
};

export default Resume;
