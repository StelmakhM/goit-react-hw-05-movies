import { API } from '../../services/Api/Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, []);

  if (!movie) {
    return;
  }
  const { title, overview, genres, vote_average, poster_path, id } = movie;
  const newGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <h2>{title}</h2>
      <p>User Score: {vote_average.toFixed(1)}</p>
      <img src={`${IMG_BASE_URL}${poster_path}`} alt={`${title} poster`} />
      <p>Overview: {overview}</p>
      <p>Genres: {newGenres}</p>
      <div>
        <p>Additional information</p>
        <Link data-id={id} to="cast">
          cast
        </Link>
        <Link data-id={id} to="reviews">
          reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
