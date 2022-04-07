import React, { useEffect, useState } from "react";
import axios from "axiosRequests/axios";
import SingleCardVideo from "components/SingleCard/SingleCardVideo";
import Slider from "react-slick/lib/slider";
import "./MovieVideoSection.css";
import { Button } from "@mui/material";
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

function MovieVideoSection({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [bgImage, setBgImage] = useState(
    "https://www.renderhub.com/renderhub/black-panther-movie-poster-3d-wallpaper/black-panther-movie-poster-3d-wallpaper_1920x1080.jpg"
  );

  const baseURL = "https://image.tmdb.org/t/p/original/";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    lazyLoad: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const handleBgImageChange = img => {
    setBgImage(img);
  };

  return (
    <div
      className="sectionContainer"
      style={{
        background: `linear-gradient(rgba(255, 255, 255,0.3), rgba(0, 0, 0, 0.9)), url("${
          // baseURL + movie?.backdrop_path
          bgImage
        }")`,
        backgroundPosition: "15% 15%",
      }}
    >
      {/* cloud */}
      <div className="sectionSubContainer"></div>

      <div className="titleContainer">
        <h2 className="sectionTitle">{title}</h2>
        <Button className="titleBtn" variant="contained" color="secondary">
          View All
        </Button>
      </div>
      <Slider {...settings}>
        {movies?.map((movie, index) => (
          <SingleCardVideo
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
            handleBgImageChange={handleBgImageChange}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MovieVideoSection;
