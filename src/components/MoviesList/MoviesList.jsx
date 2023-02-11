import PropTypes from 'prop-types';
import { getMovieId } from "api-service/api";
import { Link, useLocation, useParams } from "react-router-dom";


const MoviesList = ({ movies }) => {

  const location = useLocation();
      console.log(movies);

      // const mappedMovies = movies.map(movie => movieId === movie.id)

      // console.log(mappedMovies);
    
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie?.id}>
            <Link to={`${movie?.id}`} state={{from: location}}>{movie?.original_title}</Link>
          </li>
        ))}
      </ul>
    );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired
  }))
}

export default MoviesList;