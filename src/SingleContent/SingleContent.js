import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <ContentModal id={id} media_type={media_type === "tv" ? "tv" : "movie"}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
        style={{ zIndex: 0 }}
      />
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movies"}
          <span className="subTitle">{date}</span>
        </span>
    </ContentModal>
  );
}

export default SingleContent;
