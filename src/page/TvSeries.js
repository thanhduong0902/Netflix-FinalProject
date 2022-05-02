import React from "react";
import "../Nav.css";
import BannerTv from "./BannerTv";
import Nav from "../Nav";
import { requests } from "../Requests";
import Row from "../Row";
function TvSeries() {
  return (
    <div>
      <Nav />
      <BannerTv />
      <Row title="Talk show" fetchUrl={requests.fetchTalk} isLargeRow />
      <Row title="News" fetchUrl={requests.fetchNews} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Family TV" fetchUrl={requests.fetchFamily} />
      <Row title="Kids TV" fetchUrl={requests.fetchKids} />
      <Row title="Anime" fetchUrl={requests.fetchAnimation} />
      <Row title=" Comedy" fetchUrl={requests.fetchComedyTv} />
    </div>
  );
}

export default TvSeries;
