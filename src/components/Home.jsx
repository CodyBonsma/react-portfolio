import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import video from "../video/feet.mp4";

const Home = () => {
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

              <p className="lead mb-0">
                I am a Full Stack Web Development student at the Georgia
                Institute of Technology
              </p>
              <h2>
              <a target="_blank" id="icon-link" href="https://www.linkedin.com/in/codybonsma/"><FaLinkedin /></a>  
                {"   "}
              <a target="_blank" id="icon-link" href="https://github.com/CodyBonsma"><FaGithub /></a>  
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
