import bgImage from "../assets/background.jpg";

function Analytics() {
  const score = localStorage.getItem("score");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: "30px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading in its own div to prevent inheritance */}
      <div style={{ alignSelf: "flex-start", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "black", // force black
            margin: 0,
            textShadow: "none",
          }}
        >
          ANALYSIS
        </h1>
      </div>

      {/* Score card */}
      <div
        style={{
          backgroundColor: "white",
          color: "#333",
          borderRadius: "20px",
          padding: "50px 60px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          textAlign: "center",
          minWidth: "300px",
          maxWidth: "500px",
        }}
      >
        <h2>Your Score</h2>
        <p style={{ fontSize: "36px", fontWeight: "bold", marginTop: "15px" }}>
          {score || 0} / 100
        </p>
      </div>
    </div>
  );
}

export default Analytics;
