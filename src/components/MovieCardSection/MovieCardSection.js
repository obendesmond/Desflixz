import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import SingleCard from "components/SingleCard/SingleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCardSection.css";
import axios from "axiosRequests/axios";

export default function MovieCardSection({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    lazyLoad: true,
    centerMode: true,
    centerPadding: "60px",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          // centerMode: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <Container maxWidth="xl" className="sectionContainer">
      <div className="cardTitleContainer">
        <h2 className="cardSectionTitle">{title}</h2>
        <Button className="cardTitleBtn" variant="contained" color="secondary">
          View All
        </Button>
      </div>
      <Slider {...settings}>
        {movies?.map((movie, index) => (
          <SingleCard
            image={`${baseURL + (movie.poster_path || movie.backdrop_path)}`}
            title={movie.name || movie.title}
            date={movie.first_air_date || movie.release_date}
            percent={movie.vote_average * 10}
            color={
              movie.vote_average > 7
                ? "#63C775"
                : movie.vote_average > 4
                ? "#D2D535"
                : "#E42E19"
            }
            key={index}
          />
        ))}
      </Slider>
    </Container>
  );
}
