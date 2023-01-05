import axios from 'axios';

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjQ0ZjBlYTQyZDM1NTExNjA4MGQ4YzU2ZjJhMmU5NSIsInN1YiI6IjYzODQ5YThiYmYwOWQxMDA3YjA1ZGNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Malh7hKQ8cPpJehS1trEierjSDz873qjS069_qwsppI';

const instance = axios.create({
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
  baseURL: 'https://api.themoviedb.org/3',
});

async function getTrendingMovies() {
  const { data } = await instance('/trending/movie/week');
  return data.results;
}

async function getMoviesByQuery(query) {
  const { data } = await instance('/search/movie', {
    params: {
      query,
    },
  });
  return data;
}

async function getMovieDetails(id) {
  const { data } = await instance(`/movie/${id}`);
  return data;
}

async function getMovieCast(id) {
  const { data } = await instance(`/movie/${id}/credits`);
  return data.cast;
}

async function getMovieReviews(id) {
  const { data } = await instance(`/movie/${id}/reviews`);
  return data.results;
}

async function getMovieGenres() {
  const { data } = await instance(`/genre/movie/list`);
  return data;
}

export const API = { getMoviesByQuery, getTrendingMovies, getMovieDetails, getMovieCast, getMovieReviews, getMovieGenres };
