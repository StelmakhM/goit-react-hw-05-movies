import { useEffect, useState } from 'react';
import { API } from '../../services/Api/Api';
import { Container, Title, MovieList } from './MoviesList.styled';
import MovieItem from '../../components/MovieItem/MovieItem';

export default function MoviesList() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);

  return (
    <Container>
      <Title>Trending movies</Title>
      <MovieList>
        {trendingMovies.map(({ id, original_title }) => (
          <MovieItem key={id} title={original_title} href={`movies/${id}`} />
        ))}
      </MovieList>
    </Container>
  );
}
