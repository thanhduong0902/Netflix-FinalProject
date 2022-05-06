import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../Banner.css";
import { requests } from "../Requests";
function BannerMovies() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchTVMovies);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const trancate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
<<<<<<< HEAD
        <div className="banner__buttons"></div>
=======
        <br />
>>>>>>> ce0b17c79efa344f7eff5a4de29840c2bc4c40d1
        <h1 className="banner__description">
          {trancate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
export default BannerMovies;
