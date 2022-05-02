import React from "react";
// import Banner from "../Banner";
import Nav from "../Nav";
import { requests } from "../Requests";
import Row from "../Row";
import "../Nav.css";
import BannerMovies from "./BannerMovies";

function Movies() {
  return (
    <div>
      <Nav />
      <BannerMovies />
      <Row title="TVMovies" fetchUrl={requests.fetchTVMovies} isLargeRow />
      <Row title="War" fetchUrl={requests.fetchWarMovies} />
      <Row title="Anime Movies" fetchUrl={requests.fetchAnime} />
      <Row
        title="Science and Fiction Movies "
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Music" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Thriller" fetchUrl={requests.fetchThrillerMovies} />
    </div>
  );
}

export default Movies;
