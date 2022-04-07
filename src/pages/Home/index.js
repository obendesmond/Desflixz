import * as React from "react";
import Banner from "components/Banner/Banner";
import MovieCardSection from "components/MovieCardSection/MovieCardSection";
import requests from "axiosRequests/Requests";
import MovieVideoSection from "components/MovieVideoSection/MovieVideoSection";
import Layout from "components/Layout";

export default function Home(props) {
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
