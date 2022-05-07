import * as React from "react";
import { useCallback } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Carousel from "../Carousel/Carousel";
import "./ContentModal.css";
import axios from "axios";
import { API_KEY, requests } from "../Requests";
import { useState, useEffect } from "react";
import { unavailable, img_500, unavailableLandscape } from "../config/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "70%",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  color: "white",
};

export default function ContentModal({ id, children, media_type }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const [videos, setVideo] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
      );
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  }, [id, media_type]);

  const fetchVideo = useCallback(async () => {
    try {
      const { data } = await axios.get(
        ` https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=1e654d3d2ad76350db78a446b60656af&language=en-US`
      );

      setVideo(data.results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  }, [id, media_type]);
  
  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [fetchData, fetchVideo]);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div>
                <div className="ContentModal">
                  <img
                    src={
                      content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                    className="ContentModal__portrait"
                  />
                  <img
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className="ContentModal__landscape"
                  />
                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}

                    <span className="ContentModal__description">
                      {content.overview}
                    </span>
                    <div>
                      <Carousel id={id} media_type={media_type} />
                    </div>
                  </div>
                </div>
                <div className="videoYtb">
                  {videos.map((item) => (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title="video"
                      width="100%"
                      frameBorder="0"
                    ></iframe>
                  ))}
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
