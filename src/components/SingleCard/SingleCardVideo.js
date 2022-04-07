import * as React from "react";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./SingleCardVideo.css";

export default function SingleCard({
  image,
  title,
  date,
  handleBgImageChange,
}) {
  return (
    <div
      className="cardVideoContainer"
      onMouseEnter={() => handleBgImageChange(image)}
    >
      <div className="videoImageContainer">
        <LinearScaleIcon
          fontSize="medium"
          className="cardVideoMenu"
          style={{ color: "white" }}
        />
        <PlayArrowIcon
          className="cardVideoPlayIcon"
          style={{ color: "white" }}
        />
        <img className="videoImage" src={image} alt={title} />
      </div>
      <div className="cardVideoContent">
        <h3>{title}</h3>
        <h4>{date}</h4>
      </div>
    </div>
  );
}
