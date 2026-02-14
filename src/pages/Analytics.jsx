function Analytics() {
  const score = localStorage.getItem("score");

  return (
    <div style={containerStyle}>
      <h2>Analytics</h2>
      <h3>Your Score: {score || 0}/100</h3>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  padding: "40px",
  background: "linear-gradient(to right, #4facfe, #00f2fe)",
  color: "white",
};

export default Analytics;
