import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/Api/Api';
import { CastContainer, CastItem, ActorPhoto } from './Cast.styled';
import { placeholderURL, IMG_BASE_URL } from '../../utils/ImageURL';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieCast(movieId).then(setCast).catch(console.log);
  }, []);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length > 0 ? (
        <CastContainer>
          {cast.map(({ name, profile_path, character }, i) => (
            <CastItem key={i}>
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
