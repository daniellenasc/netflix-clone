import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import "./Row.css";

function Row({ title, path, isLarge }) {
  const imageHost = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data);
      setMovies(data?.results);
    } catch (error) {
      console.error("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img
              className={`movie-card ${isLarge && "movie-card-large"}`}
              key={movie.id}
              src={`${imageHost}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
