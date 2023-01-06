import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { API } from '../../services/Api/Api';

export default function MoviesList() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);

  return (
    <>
      <p>Trending movies</p>
      <ul>
        {trendingMovies.map(({ id, original_title }) => (
          <MovieItem key={id} title={original_title} href={`movies/${id}`} />
        ))}
      </ul>
    </>
  );
}
