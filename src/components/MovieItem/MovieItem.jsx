import { Link, useLocation } from 'react-router-dom';
import { StyledLink } from './MovieItem.styled';

export default function MovieItem({ title, href }) {
  const location = useLocation();
  return (
    <li>
      <StyledLink to={href} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  );
}
