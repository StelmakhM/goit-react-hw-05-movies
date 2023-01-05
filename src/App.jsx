import MoviesList from './components/MoviesList/MoviesList';
import MovieInfo from './components/MovieInfo/MovieInfo';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import { useState, useEffect } from 'react';
import { API } from './services/Api/Api';
import { Route, Routes, Outlet } from 'react-router-dom';

export default function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MoviesList movies={trendingMovies} />} />
        <Route
          path="movies"
          element={
            <div>
              moviesearch
              <Outlet />
            </div>
          }
        >
          <Route path=":movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
