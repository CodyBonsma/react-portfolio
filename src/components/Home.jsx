import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Modal from "./Modal/Modal";
import video from "../video/feet.mp4";

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    console.log("You clicked OPEN MODAL")
    setShowModal(prev => !prev);
  }

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
          <Modal showModal={showModal} setShowModal={setShowModal}/>
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h2 className="display-5">Welcome to</h2>
              <h1 className="display-3 front-name">CeudsCodes.</h1>
              <hr />
              <p className="lead mb-0">
                I am a Full Stack Web Development student at the Georgia
                Institute of Technology
              </p>
              <h2>
                <a
                  className="social-link"
                  target="_blank"
                  id="icon-link"
                  href="https://www.linkedin.com/in/codybonsma/"
                >
                  <FaLinkedin />
                </a>
                {"   "}
                <a
                  className="social-link"
                  target="_blank"
                  id="icon-link"
                  href="https://github.com/CodyBonsma"
                >
                  <FaGithub />
                </a>
              </h2>
              <div className="row info-buttons">
                <div className="col-sm-3" />
                <div className="col-sm-3">
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1hc0u7lhkeoFrWk7XcVb_Bw6tep6twIB7zCtCxLDB-SI/edit?usp=sharing"
                    class="btn btn-5"
                  >
                    Resume
                  </a>
                </div>
                <div className="col-sm-3">
                  <a class="btn btn-5" onClick={openModal}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
