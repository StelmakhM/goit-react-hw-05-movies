import { Link } from 'react-router-dom';

export default function MovieItem({ title, overview, genreIds, genresList, score, poster_path, id }) {
  return (
    <li>
      <Link to={`movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
}
