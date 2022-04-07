import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCarousel.css";
import axios from "axiosRequests/axios";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
  </div>
);
const NextBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
  </div>
);

export default function MovieCarousel({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    lazyLoad: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    swipeToSlide: true,
    customPaging: i => (
      <div>
        <img
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src={`${
            baseURL + (movies[i].poster_path || movies[i].backdrop_path)
          }`}
          alt={i}
        />
      </div>
    ),
    dotsClass: "slick-dots custom-indicator",
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
    <Container maxWidth="lg" className="carouselContainer">
      <Slider {...settings}>
        {movies?.map((movie, index) => (
          <div key={index}>
            <img
              key={index}
              src={`${baseURL + (movie.poster_path || movie.backdrop_path)}`}
              alt=""
              style={{ width: "100%", height: "50vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
}
