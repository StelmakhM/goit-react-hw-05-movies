import SharedLayout from './components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const MoviesListPage = lazy(() => import('./pages/MoviesList/MoviesListPage'));
const MovieInfoPage = lazy(() => import('./pages/MovieInfo/MovieInfoPage'));
const CastPage = lazy(() => import('./pages/Cast/CastPage'));
const ReviewsPage = lazy(() => import('./pages/Reviews/ReviewsPage'));
const MovieSearchPage = lazy(() => import('./pages/MovieSearch/MovieSearchPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MoviesListPage />} />
        <Route path="movies" element={<MovieSearchPage />} />
        <Route path="movies/:movieId" element={<MovieInfoPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
