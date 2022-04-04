import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import "./Banner.css";
import Search from "components/Search/Search";
import requests from "./Requests";
import axios from "axios/axios";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [beginingPoint] = useState("https://image.tmdb.org/t/p/original/");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const data = request.data.results;
      setMovie(data[Math.floor(Math.random() * data.length - 1)]);
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  return (
    <div
      className="banner"
      style={{
        background: `linear-gradient(rgba(41, 0, 0, 0.6), rgba(95, 10, 0, 0.7)), url("${
          beginingPoint + movie?.backdrop_path
        }")`,
      }}
    >
      <Container sx={{ pt: "30px" }}>
        <Grid container flexDirection="column">
          <h1 className="banner_title">Welcome, Desmond.</h1>
          <h4 className="banner_title2">
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>
          <Grid container>
            <Button
              startIcon={<PlayCircleFilledWhiteOutlinedIcon />}
              disableElevation
              variant="contained"
              color="primary"
            >
              Play
            </Button>
            .....
            <Button disableElevation variant="contained" color="primary">
              My List
            </Button>
            <Search />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;
