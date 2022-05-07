import axios from "./axios";
import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import SingleContent from "./SingleContent/SingleContent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Row({ title, fetchUrl, type }) {
  const [movies, setMovies] = useState([]);
  const row = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const scroll = (scrollOffset) => {
    row.current.scrollLeft += scrollOffset;
    setscrollX(scrollX + scrollOffset); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(row.current.scrollWidth - row.current.scrollLeft) <=
      row.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  // Check button visible contion during the scroll event
  const scrollCheck = () => {
    setscrollX(row.current.scrollLeft);
    if (
      Math.floor(row.current.scrollWidth - row.current.scrollLeft) <=
      row.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row--flex">
        
        <div className="row__posters" ref={row} onScroll={scrollCheck}>
          {movies.map((movie) => (
            <SingleContent
              className="row__poster"
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type={type}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Row;
