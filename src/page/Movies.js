import React, { useContext } from "react";
import Nav from "../Nav";
import { requests } from "../Requests";
import Row from "../Row";
import "../Nav.css";
import BannerMovies from "./BannerMovies";
import MovieSearch from "../search_list/MovieSearch";
import Container from "@mui/material/Container";
import { SearchContext } from "../context/SearchContext";

function Movies() {
  const { contentMovies, searchText, showSearch } = useContext(SearchContext);

  return (
    <div>
      <Nav />
      <BannerMovies />

      <Container>
        {contentMovies.length >= 1 ? (
          <MovieSearch />
        ) : (
          <>
            {searchText && showSearch === true && (
              <h2
                style={{
                  color: "#fff",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                No Movies found
              </h2>
            )}
            <Row
              title="TVMovies"
              fetchUrl={requests.fetchTVMovies}
              isLargeRow
            />
            <Row title="War" fetchUrl={requests.fetchWarMovies} />
            <Row title="Anime Movies" fetchUrl={requests.fetchAnime} />
            <Row
              title="Science and Fiction Movies "
              fetchUrl={requests.fetchScienceFictionMovies}
            />
            <Row title="Music" fetchUrl={requests.fetchMusicMovies} />
            <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
            <Row title="Thriller" fetchUrl={requests.fetchThrillerMovies} />
          </>
        )}
      </Container>
    </div>
  );
}

export default Movies;
