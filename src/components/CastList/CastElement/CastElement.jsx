import PropTypes from 'prop-types';
const { getPosterPath, PLSHOLDER } = require("api-service/api");


const CastElement = ({movie}) => (
  <>
    <img src={getPosterPath(movie?.profile_path)} alt={movie?.original_name} />
    <p>{movie?.original_name}</p>
    <p>{movie?.character}</p>
  </>
);

CastElement.defaultProps = {
  profile_path: PLSHOLDER,
  character: "Wasn't a character"
}

CastElement.propTypes = {
  movie: PropTypes.shape({
    profile_path: PropTypes.string,
    original_name: PropTypes.string.isRequired,
    character: PropTypes.string
  })
}

export default CastElement;