import { Link, useLocation } from 'react-router-dom';

export default function MovieItem({ title, href }) {
  const location = useLocation();
  return (
    <li>
      <Link to={href} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </li>
  );
}
