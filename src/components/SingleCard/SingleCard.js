import * as React from "react";
import "./SingleCard.css";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PercentCircularProgress from "components/PercentCircularProgress/PercentCircularProgress";

export default function SingleCard({ image, title, date, percent, color }) {
  return (
    <div className="card">
      <LinearScaleIcon
        fontSize="medium"
        className="cardMenu"
        style={{ color: "white" }}
      />
      <img src={image} alt={title} />
      <PercentCircularProgress percent={percent} color={color} />
      <div className="cardContent">
        <h3>{title}</h3>
        <h4>{date}</h4>
      </div>
    </div>
  );
}
