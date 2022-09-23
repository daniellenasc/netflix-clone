import { React, useEffect, useState } from "react"
import { getMovies } from "../api";

function Row(title, path) {
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
        <div>Row</div>
    )
}

export default Row