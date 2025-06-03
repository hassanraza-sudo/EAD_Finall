function TrafficLightSimulator() {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.light, backgroundColor: "red" }}></div>
      <div style={{ ...styles.light, backgroundColor: "yellow" }}></div>
      <div style={{ ...styles.light, backgroundColor: "green" }}></div>
    </div>
  );
}

const styles = {
  container: {
    width: "100px",
    height: "300px",
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  light: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
};

export default TrafficLightSimulator;
