import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      //   style={{
      //     backgroundSize: "cover",
      //     backgroundImage: `url("https://wallpaperaccess.com/full/2416004.jpg")`,
      //     backgroundPosition: "center center",
      //   }}
    >
      <div className="banner_contents">
        <Container sx={{ pt: "30px" }}>
          <h1 className="banner_title">Welcome, Desmond.</h1>
          <h4 className="banner_title2">
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>
        </Container>
        {/* <div className="banner_buttons">
          <Button variant="outlined" color="secondary">
            Play
          </Button>
          <Button variant="contain" color="secondary">
            My Lists
          </Button>
        </div> */}
      </div>
    </header>
  );
}

export default Banner;
