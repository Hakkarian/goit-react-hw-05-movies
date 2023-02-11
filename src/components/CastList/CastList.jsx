import PropTypes from 'prop-types';
import Cast from "pages/Movies/Cast";
import CastElement from "./CastElement";




const CastList = ({ movies }) => {
    console.log(movies)
    return (
      <ul>
        {movies.map((movie) => (
          <li>
            <Cast movie={movie} />
          </li>
        ))}
      </ul>
    );
}

CastList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default CastList;