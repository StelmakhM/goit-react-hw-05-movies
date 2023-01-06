import { API } from '../../services/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId).then(setReviews).catch(console.log);
  }, []);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <p>Author name: {author}</p>
          <p>Review: {content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews for this movie</p>
  );
}
