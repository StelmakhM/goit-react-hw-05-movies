import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../services/Api/Api';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    API.getMovieCast(movieId)
      .then(cast => setCast(cast.slice(0, 5)))
      .catch(console.log);
  }, []);

  return (
    <ul>
      {cast.map(({ name, profile_path, character }) => (
        <li key={name}>
          <img src={`${IMG_BASE_URL}${profile_path}`} alt={`${name} actor`} />
          <p>Actor name : {name}</p>
          <p>Character : {character}</p>
        </li>
      ))}
    </ul>
  );
}
