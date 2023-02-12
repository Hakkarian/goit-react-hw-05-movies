import PropTypes from 'prop-types';
import { getMoviesById, getMoviesList, getPosterPath, PLSHOLDER } from "api-service/api";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader';
import { StyledList } from '../Cast/Cast.styled';
import { StyledLink, StyledMain } from './MovieDetails.styled';


const MovieDetails = ({movies}) => {

  const location = useLocation();

  const back = location.state?.from ?? '/';


  const [movie, setMovie] = useState();

  let { movieId } = useParams();


  if (!movieId) {
    movieId = 0;
  }

  const navigate = useNavigate();



  useEffect(() => {

    const fetchMovie = async() => {
      try {
        getMoviesById(movieId).then(setMovie)
      } catch ({response}) {
        console.log(response.data.message)
      }
    }
    fetchMovie();
  }, [movieId])
  

  console.log(movieId);

  console.log(movie)


  
  return (
    <>
      <StyledMain>
        <StyledLink to={back}>Go Back</StyledLink>
        <img src={getPosterPath(movie?.poster_path)} alt={movie?.title} />
        <div>
          <h1>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
          <p>{(movie?.vote_average * 10).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{movie?.overview}</p>
          <h2>Genres</h2>
          <StyledList>
            {movie?.genres.map((genre) => (
              <li>
                <p>{genre?.name}</p>
              </li>
            ))}
          </StyledList>
          <p>Additional information</p>
          <StyledList>
            <li>
              <Link to="cast" state={{ from: back }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: back }}>
                Reviews
              </Link>
            </li>
          </StyledList>
        </div>
      </StyledMain>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );


}

MovieDetails.defaultProps = {
  poster_path: PLSHOLDER
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
  })
}

export default MovieDetails;