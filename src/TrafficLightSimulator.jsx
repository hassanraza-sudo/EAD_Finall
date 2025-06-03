import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const lights = ["red", "yellow", "green"];
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        const nextIndex = (lights.indexOf(prev) + 1) % lights.length;
        return lights[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.light,
          backgroundColor: "red",
          opacity: currentLight === "red" ? 1 : 0.3,
          boxShadow: currentLight === "red" ? "0 0 20px red" : "none",
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: "yellow",
          opacity: currentLight === "yellow" ? 1 : 0.3,
          boxShadow: currentLight === "yellow" ? "0 0 20px yellow" : "none",
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: "green",
          opacity: currentLight === "green" ? 1 : 0.3,
          boxShadow: currentLight === "green" ? "0 0 20px green" : "none",
        }}
      ></div>
    </div>
  );
};

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
