import PropTypes from 'prop-types';
import { getMovieId, getMovies, getMoviesList } from "api-service/api";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";




const Home = () => {
  const location = useLocation();
    const [list, setList] = useState([]);

    useEffect(() => {
        getMoviesList().then(setList)
    }, [])

  console.log(location)
  

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {list.map(({ id, original_title }) => (
              <li key={id}>
                  <Link to={getMovieId(id)} state={{from: location}}>{original_title}</Link>
                </li>
          ))}
        </ul>

      </>
    );
}

Home.defaultProps = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired
  }))
}

export default Home;