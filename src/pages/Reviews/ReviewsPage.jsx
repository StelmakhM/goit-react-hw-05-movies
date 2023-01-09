import { API } from '../../services/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewContainer, ReviewItem } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId).then(setReviews).catch(console.log);
  }, []);

  return reviews.length > 0 ? (
    <ReviewContainer>
      {reviews.map(({ author, content, id }) => (
        <ReviewItem key={id}>
          <p>
            <b>Author name:</b> {author}
          </p>
          <p>
            <b>Review:</b> <i>{content}</i>
          </p>
        </ReviewItem>
      ))}
    </ReviewContainer>
  ) : (
    <p>No reviews for this movie</p>
  );
}
