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
            <Row title="Talk show" fetchUrl={requests.fetchTalk} type="tv" />
            <Row title="News" fetchUrl={requests.fetchNews} type="tv" />
            <Row title="Drama" fetchUrl={requests.fetchDrama} type="tv" />
            <Row title="Family TV" fetchUrl={requests.fetchFamily} type="tv" />
            <Row title="Kids TV" fetchUrl={requests.fetchKids} type="tv" />
            <Row title="Anime" fetchUrl={requests.fetchAnimation} type="tv" />
            <Row title=" Comedy" fetchUrl={requests.fetchComedyTv} type="tv" />
          </>
        )}
      </Container>
    </div>
  );
}

export default TvSeries;
