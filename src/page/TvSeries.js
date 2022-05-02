import React, { useContext } from "react";
import "../Nav.css";
import BannerTv from "./BannerTv";
import Nav from "../Nav";
import { requests } from "../Requests";
import Row from "../Row";
import TvSeriesSearch from "../search_list/TvSeriesSearch";
import Container from "@mui/material/Container";
import { SearchContext } from "../context/SearchContext";

function TvSeries() {
  const { contentTvSeries, searchText, showSearch } = useContext(SearchContext);

  return (
    <div>
      <Nav />
      <BannerTv />

      <Container>
        {contentTvSeries.length >= 1 ? (
          <TvSeriesSearch />
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
                No TV Series found
              </h2>
            )}
            <Row title="Talk show" fetchUrl={requests.fetchTalk} isLargeRow />
            <Row title="News" fetchUrl={requests.fetchNews} />
            <Row title="Drama" fetchUrl={requests.fetchDrama} />
            <Row title="Family TV" fetchUrl={requests.fetchFamily} />
            <Row title="Kids TV" fetchUrl={requests.fetchKids} />
            <Row title="Anime" fetchUrl={requests.fetchAnimation} />
            <Row title=" Comedy" fetchUrl={requests.fetchComedyTv} />
          </>
        )}
      </Container>
    </div>
  );
}

export default TvSeries;
