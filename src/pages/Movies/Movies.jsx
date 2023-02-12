import { getMovies } from "api-service/api";
import MoviesList from "components/MoviesList";
import SearchMovies from "pages/SearchMovies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("query");

    useEffect(() => {
        if (!query) {
            return;
        }

        getMovies(query).then(response => {
            if (response.length === 0) {
                setStatus("rejected")
                setSearchParams({ query: ""})
                alert("An error occured while processing your request")
                return;
            }
            setMovies([...response])
        })
        setStatus("fulfilled")

    }, [query])

    console.log(movies)

    const handleSubmit = (e) => {
        e.preventDefault();
        let query = e.target.elements.query.value;

        setSearchParams({query: query})
    };
    
    return <>
        <SearchMovies onSubmit={handleSubmit} />

        {status === "rejected" && <div>An error occured while processing your request</div>}
        <MoviesList movies={movies} />
    </>
}

export default Movies;