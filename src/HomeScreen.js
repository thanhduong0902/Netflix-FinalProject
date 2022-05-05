import { useContext } from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import { requests } from "./Requests";
import Row from "./Row";
import "./HomeScreen.css";
import Container from "@mui/material/Container";

import { SearchContext } from "./context/SearchContext";
import HomeSearch from "./search_list/HomeSearch";

function HomeScreen() {
  const { contentHome, searchTextHome, showSearch } = useContext(SearchContext);

  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Container>
        {contentHome.length >= 1 ? (
          <HomeSearch />
        ) : (
          <>
            {searchTextHome && showSearch === true && (
              <h2
                style={{
                  color: "#fff",
                  marginLeft: "20px",
                  marginBottom: "20px",
                }}
              >
                No movies found
              </h2>
            )}

            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
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
