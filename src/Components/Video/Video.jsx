import React from "react";
import "./Video.css";
import video from "../../assets/images/Video.png";

const Video = () => {
  return (
    <section className="video">
      <img src={video} alt="video" />
    </section>
  );
};

export default Video;
