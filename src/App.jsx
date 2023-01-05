import MoviesList from './components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { API } from './services/Api/Api';
import { setToLocalStorage, getFromLocalStorage } from './utils/LocalStorage';
import { Route, Routes, Link } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genresList] = useState(() => getFromLocalStorage('genres') ?? []);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const moviesList = await API.getTrendingMovies();
      setMovies(moviesList);
    };
    getTrendingMovies();

    if (genresList.length > 0) {
      return;
    }

    const getMovieGenres = async () => {
      const genresList = await API.getMovieGenres();
      setToLocalStorage('genres', genresList.genres);
    };
    getMovieGenres();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<MoviesList movies={movies} genresList={genresList} />}
          />
          <Route path="movies" element={<p>moviesearch</p>}>
            <Route path="movies/:movieId" element={<p>moviesearch</p>} />
            <Route path="movies/:movieId/cast" element={<p>moviesearch</p>} />
            <Route
              path="movies/:movieId/reviews"
              element={<p>moviesearch</p>}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
