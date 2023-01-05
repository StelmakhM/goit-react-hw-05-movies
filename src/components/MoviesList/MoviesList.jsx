import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

export default function MoviesList({ movies }) {
  return (
    <>
      <p>Trending movies</p>
      <ul>
        {movies.map(({ id, original_title }) => (
          <MovieItem key={id} title={original_title} id={id} />
        ))}
      </ul>
    </>
  );
}
