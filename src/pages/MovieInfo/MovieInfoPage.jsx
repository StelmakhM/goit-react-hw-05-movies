import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { API } from '../../services/Api/Api';
import { placeholderURL, IMG_BASE_URL } from '../../utils/ImageURL';
import { StyledLink } from '../../components/AppBar/AppBar.styled';
import Spinner from '../../utils/Spinner/Spinner';
import { GoBackButton, MovieContainer, GeneralContainer, InfoContainer, AdditionalContainer, InfoTitle, ButtonContainer } from './MovieInfo.styled';

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovie).catch(console.log);
  }, []);

  if (!movie) {
    return;
  }
  const { title, overview, genres, vote_average, poster_path, id } = movie;
  const newGenres = genres.map(genre => genre.name).join(', ');
  const goBackHref = location.state?.from ?? '/';

  return (
    <GeneralContainer>
      <GoBackButton to={goBackHref}>
        <BiArrowBack style={{ marginRight: 10 }} />
        Go Back
      </GoBackButton>
      <MovieContainer>
        <img src={poster_path ? `${IMG_BASE_URL}${poster_path}` : placeholderURL} alt={`${title} poster`} />
        <InfoContainer>
          <h2>{title}</h2>
          <p>
            <b>User Score:</b> {vote_average.toFixed(1)}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {newGenres}
          </p>
        </InfoContainer>
      </MovieContainer>
      <AdditionalContainer>
        <InfoTitle>Additional information</InfoTitle>
        <ButtonContainer>
          <StyledLink data-id={id} to="cast" state={location.state}>
            cast
          </StyledLink>
          <StyledLink data-id={id} to="reviews" state={location.state}>
            reviews
          </StyledLink>
        </ButtonContainer>
      </AdditionalContainer>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </GeneralContainer>
  );
}
