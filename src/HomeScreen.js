import React, { useState } from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import { requests } from "./Requests";
import Row from "./Row";
import "./HomeScreen.css";
import Container from "@mui/material/Container";

import SingleContent from "./SingleContent/SingleContent";
import CustomPagination from "./pagination/CustomPagination";

function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="homeScreen">
      <Nav
        searchText={searchText}
        setSearchText={setSearchText}
        content={content}
        setContent={setContent}
        setNumOfPages={setNumOfPages}
        page={page}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Banner />

      <Container>
        {content.length >= 1 ? (
          <>
            <div className="search__list">
              {content &&
                content.map((item) => (
                  <SingleContent
                    key={item.id}
                    id={item.id}
                    poster={item.poster_path}
                    title={item.title || item.name}
                    date={item.first_air_date || item.release_date}
                    media_type=''
                    vote_average={item.vote_average}
                  />
                ))}
            </div>

            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
          </>
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
                No movies found
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
