import PropTypes from 'prop-types';
import { getMovieReview } from "api-service/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledList } from "../Cast/Cast.styled";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      const fetchCast = async () => {
        try {
          getMovieReview(movieId).then(setReviews);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      fetchCast();
    }, [movieId]);

    console.log(reviews.length);

    return (
      <StyledList>
            {reviews.length === 0 ? <h2>There aren't any reviews yet</h2> : reviews.map((review) => (
          <li key={review?.id}>
                <h3>{review?.author}</h3>
            <p>{review?.content}</p>
          </li>
        ))}
      </StyledList>
    );
}

Reviews.defaultProps = {
  author: "Stranger",
  content: "Some text"
}

Reviews.defaultProps = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string
  }))
}

export default Reviews;