import PropTypes from 'prop-types';
import { useSearchParams } from "react-router-dom";


const SearchMovies = ({onSubmit}) => {

    return <form onSubmit={onSubmit}>
        <label>
        <input type="name" name="query" autoFocus />
        <button type="submit">Submit</button>
        </label>
      </form>
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}



export default SearchMovies;