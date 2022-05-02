import React, { useContext } from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import { requests } from "./Requests";
import Row from "./Row";
import Container from "@mui/material/Container";
import HomeSearch from "./search_list/HomeSearch";
import { SearchContext } from "./context/SearchContext";

function HomeScreen() {
  const { contentHome, searchText, showSearch } = useContext(SearchContext);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Container>
        {contentHome.length >= 1 ? (
          <HomeSearch />
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
                No Movies/TV Series found
              </h2>
            )}

            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row
              title="AdventureMovies"
              fetchUrl={requests.fetchAdventureMovies}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export default HomeScreen;
