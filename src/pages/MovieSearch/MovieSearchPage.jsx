import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../../services/Api/Api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledForm, StyledInput, SearchButton, MovieList } from './MovieSearch.styled';
import { CiSearch } from 'react-icons/ci';
import MovieItem from '../../components/MovieItem/MovieItem';

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

  return (
    <>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInput type="text" value={query} onChange={onChangeHandler} />
        <SearchButton type="submit">
          <CiSearch size={30} />
        </SearchButton>
      </StyledForm>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, original_title }) => (
            <MovieItem key={id} title={original_title} href={`${id}`} />
          ))}
        </MovieList>
      )}
    </>
  );
}
