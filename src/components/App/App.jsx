import { getMoviesList } from "api-service/api";
import Loader from "components/Loader";

import { lazy, Suspense, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Container, StyledHeader, StyledLink } from "./App.styled";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/Movies/MovieDetails"));
const Cast = lazy(() => import("pages/Movies/Cast"));
const Reviews = lazy(() => import("pages/Movies/Reviews"));


const App = () => {

    return (
      <>
        <StyledHeader>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledHeader>
        <Container>
          <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Routes>
          </Suspense>
        </Container>
      </>
    );
}

export default App;