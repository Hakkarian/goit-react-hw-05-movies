import axios from "axios"
import { useState } from "react";

const BASE_URL = "https://api.themoviedb.org"

const API_KEY = "api_key=bf7427f454720ef16a870962fd9f447e";

export const PLSHOLDER = `https://e7.pngegg.com/pngimages/745/646/png-clipart-question-mark-computer-icons-question-miscellaneous-face.png`;


export const getPosterPath = posterPath => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
}

export const getMovieId = (id) => `/movies/${id}`;



export const getMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?${API_KEY}&language=en-US&query=${query}&page=1`
  );
  console.log(response.data.results)
    return response.data.results;
}


export const getMoviesList = async () => {
    const response = await axios.get(
      `${BASE_URL}/3/trending/all/day?${API_KEY}`
  );
    return response.data.results;
}

export const getMoviesById = async (id) => {
  const films = await axios.get(`${BASE_URL}/3/movie/${id}?${API_KEY}`).then(response => response);
  console.log(films.data)
  return films.data;
}

export const getMovieCast = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${id}/credits?${API_KEY}&language=en-US`
  );
  console.log(response.data)
  return response.data.cast;
}

export const getMovieReview = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${id}/reviews?${API_KEY}&language=en-US&page=1`
  );
  console.log(response.data);
  return response.data.results;
}





