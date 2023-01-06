import { API } from '../../services/Api/Api';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import placeholderURL from '../../utils/LocalStorage';
import { StyledLink, MovieContainer, GeneralContainer, InfoContainer, AdditionalContainer, InfoTitle, ButtonContainer } from './MovieInfo.styled';
import { StyledLink as LinkStyled } from '../AppBar/AppBar.styled';
import { BiArrowBack } from 'react-icons/bi';

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';

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
      <StyledLink to={goBackHref}>
        <BiArrowBack style={{ marginRight: 10 }} />
        Go Back
      </StyledLink>
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
          <LinkStyled data-id={id} to="cast">
            cast
          </LinkStyled>
          <LinkStyled data-id={id} to="reviews">
            reviews
          </LinkStyled>
        </ButtonContainer>
      </AdditionalContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </GeneralContainer>
  );
}
