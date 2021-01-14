import React, { useState, useRef } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import profileImage from "../../Images/Profile.jpg";
import { useSpring, animated } from "react-spring";
import "./Modal.css";

const Modal = ({ showModal, setShowModal }) => {
  const Background = styled.div`
    width: 100%;
    height: 100%;
    // background: rgba(0, 0, 0, 0.2);
    // position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ModalWrapper = styled.div`
    width: 700px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
  `;

  const ModalImg = styled.img`
    width: auto;
    height: 100%;
    border-radius: 10px 00 10px;
    background: #000;
  `;

  const ModalContent = styled.div`
//   margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414
        color: #fff
        border: none;
    }
    `;

  const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
  `;

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={profileImage} alt="profilePic" />
              <ModalContent>
                <div className="container-modal">
                  <div className="row">
                    <div className="col-sm">
                      <h1 className="contact-title">Contact</h1>
                      {"\n"}
                      <h3>(912) 531-5946</h3>
                      <h3>codybonsma@gmail.com</h3>
                    </div>
                  </div>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
