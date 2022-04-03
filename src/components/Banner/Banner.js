import React from "react";
import { Button, Container, Grid, Input, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "./Banner.css";
import Search from "components/Search/Search";

function Banner() {
  return (
    <div className="banner">
      <Container sx={{ pt: "30px" }}>
        <Grid container flexDirection="column">
          <h1 className="banner_title">Welcome, Desmond.</h1>
          <h4 className="banner_title2">
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>
          <Search />
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
