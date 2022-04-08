import React, { useEffect } from "react";
import Banner from "components/Banner/Banner";
import MovieCardSection from "components/MovieCardSection/MovieCardSection";
import requests from "axiosRequests/Requests";
import MovieVideoSection from "components/MovieVideoSection/MovieVideoSection";
import Layout from "components/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return (
    <Layout>
      <Banner />
      <MovieCardSection
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />
      <MovieVideoSection
        title="Trending Video Now"
        fetchURL={requests.fetchTrending}
      />
      <MovieCardSection
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />
    </Layout>
  );
}
