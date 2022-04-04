import * as React from "react";
import Banner from "components/Banner/Banner";
import MovieCardSection from "components/MovieCardSection/MovieCardSection";
import requests from "axiosRequests/Requests";

export default function Home(props) {
  return (
    <div>
      <Banner />
      <MovieCardSection
        title="Trending Now"
        fetchURL={requests.fetchTrending}
      />

      <MovieCardSection
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieCardSection title="Top Rated" fetchURL={requests.fetchTopRated} />
      <MovieCardSection
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <MovieCardSection
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
      />
      <MovieCardSection
        title="Horror Movies"
        fetchURL={requests.fetchHorroMovies}
      />
      <MovieCardSection
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
      />
      <MovieCardSection
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}
