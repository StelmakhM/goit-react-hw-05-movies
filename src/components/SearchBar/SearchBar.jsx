import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../../services/Api/Api';
import MovieItem from '../MovieItem/MovieItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    API.getMoviesByQuery(query).then(setMovies).catch(console.log);
  }, []);

  const onChangeHandler = e => {
    const { value } = e.target;
    setSearchParams(value ? { query: value } : {});
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!query) {
      Notify.info('Please, enter movie name');
      return;
    }
    API.getMoviesByQuery(query).then(setMovies).catch(console.log);
  };

  return movies.length > 0 ? (
    <ul>
      {movies.map(({ id, original_title }) => (
        <MovieItem key={id} title={original_title} id={id} href={`${id}`} />
      ))}
    </ul>
  ) : (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={query} onChange={onChangeHandler} />
      <button type="submit">Search</button>
    </form>
  );
}
