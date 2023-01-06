// import MoviesList from './components/MoviesList/MoviesList';
// import MovieInfo from './components/MovieInfo/MovieInfo';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import Cast from './components/Cast/Cast';
// import Reviews from './components/Reviews/Reviews';
// import SearchBar from './components/SearchBar/SearchBar';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const MoviesList = lazy(() => import('./components/MoviesList/MoviesList'));
const MovieInfo = lazy(() => import('./components/MovieInfo/MovieInfo'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const SearchBar = lazy(() => import('./components/SearchBar/SearchBar'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MoviesList />} />
        <Route path="movies" element={<SearchBar />} />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
