import React from "react";
import video from "../video/three-sisters.mp4";

const About = () => {
  return (
    <div className="container-vid">
      <div className="overlay"></div>
      <div className="fullscreen-video-wrap">
        <video
          className="background-video"
          src={video}
          autoPlay={true}
          loop={true}
          //   playsinline={playsinline}
        ></video>
        <div className="container main-about h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Video Header</h1>
              <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
