import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import SingleContent from "./SingleContent/SingleContent";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <SingleContent
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title || movie.name}
            date={movie.first_air_date || movie.release_date}
            media_type={movie.media_type}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
