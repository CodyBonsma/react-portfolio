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
                <h2 className="display-5 ">Welcome to</h2>
              <h1 className="display-3">Ceuds Codes.</h1>
              
              <p className="lead mb-0">Full-Stack Web Developer with a MERN stack focus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
