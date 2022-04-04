const tmdbKey = process.env.TMDB_API_KEY
  ? process.env.TMDB_API_KEY
  : "8525e97cec11bc754c4463ebe1e94d35";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${tmdbKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${tmdbKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated=${tmdbKey}&language=en-US`,
  fetchActionMovies: `/discover/movie/api_key=${tmdbKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/api_key=${tmdbKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/api_key=${tmdbKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/api_key=${tmdbKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/api_key=${tmdbKey}&with_genres=99`,
};

export default requests;
