import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../services/Api/Api';
import placeholderURL from '../../utils/PlaseholderImage';
import { CastContainer, CastItem, ActorPhoto } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    API.getMovieCast(movieId)
      .then(cast => setCast(cast.slice(0, 10)))
      .catch(console.log);
  }, []);

  return (
    <>
      {cast.length > 0 ? (
        <CastContainer>
          {cast.map(({ name, profile_path, character }) => (
            <CastItem key={name}>
              <ActorPhoto width="100" src={profile_path ? `${IMG_BASE_URL}${profile_path}` : placeholderURL} />
              <div>
                <p>
                  <b>Actor name :</b> {name}
                </p>
                <p>
                  <b>Character :</b> {character}
                </p>
              </div>
            </CastItem>
          ))}
        </CastContainer>
      ) : (
        <p>No cast info for this movie</p>
      )}
    </>
  );
}
