import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import "./Banner.css";
import Search from "components/Search/Search";
import axios from "axiosRequests/axios";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import requests from "axiosRequests/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const imgDefault =
    "https://www.renderhub.com/renderhub/black-panther-movie-poster-3d-wallpaper/black-panther-movie-poster-3d-wallpaper_1920x1080.jpg";

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
        background: `linear-gradient(rgba(41, 0, 0, 0.6), rgba(95, 10, 0, 0.6)), url("${
          // baseURL + movie?.backdrop_path
          imgDefault
        }")`,
        backgroundPosition: "center 15%",
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
              color="secondary"
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
