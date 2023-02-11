import PropTypes from 'prop-types';
import { getMovieCast, getPosterPath, PLSHOLDER } from "api-service/api";
import CastList from "components/CastList";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StyledElement, StyledList } from "./Cast.styled";


const Cast = () => {
    const [actors, setMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            try {
                getMovieCast(movieId).then(setMovies);
            } catch ({response}) {
                console.log(response.data.message);
            }
        }
        fetchCast();
    }, [movieId])

    console.log(actors)



    return <StyledList>{actors.map(actor => <StyledElement key={actor?.id}>
        <img src={!actor?.profile_path ? PLSHOLDER : getPosterPath(actor?.profile_path)} alt={actor?.original_name} width="200" height="300"/>
        <p>{actor?.original_name}</p> <br />
        <p>{actor?.character}</p>
    </StyledElement>)}</StyledList>
}

Cast.defaultProps = {
    profile_path: PLSHOLDER,
    character: "Wasn't a character"
}

Cast.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        original_name: PropTypes.string.isRequired,
        character: PropTypes.string,
    }))
}

export default Cast;