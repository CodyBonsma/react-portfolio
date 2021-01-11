import React, { useState } from "react";

const Modal = ({showModal, setShowModal}) => {
  // const [modalShow, setModalShow] = useState(false)

  return <>{showModal ? <div>I'm Modal</div> : null}</>;
};

export default Modal;
