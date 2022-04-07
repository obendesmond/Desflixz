import * as React from "react";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./SingleCardVideo.css";
import styled from "@emotion/styled";

export default function SingleCard({ image, title, date }) {
  return (
    <div className="cardVideoContainer">
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
        <Button>Click Me!</Button>
      </div>
    </div>
  );
}

const Button = styled.button`
  color: white;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: red;
  width: 90%;
`;
