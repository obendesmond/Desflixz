import { CircularProgress } from "@mui/material";
import React from "react";
import "./PercentCircularProgress.css";

function PercentCircularProgress({ percent, color }) {
  return (
    <div className="percentContainer">
      <div style={{ display: "grid" }}>
        <CircularProgress
          className="progress"
          variant="determinate"
          size={35}
          value={percent}
          style={{
            backgroundColor: "#174F96",
            borderRadius: "60px",
            border: "2px solid #174F96",
            color: `${color}`,
          }}
        />
        <CircularProgress
          className="progress"
          variant="determinate"
          size={35}
          value={100}
          style={{
            backgroundColor: "transparent",
            borderRadius: "60px",
            border: "2px solid #174F96",
            color: `${color}`,
            opacity: 0.4,
          }}
        />
      </div>
      <div className="percent">
        <span>{percent}</span>
        <span style={{ fontSize: "7px" }}>%</span>
      </div>
    </div>
  );
}

export default PercentCircularProgress;
