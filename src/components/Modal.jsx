import React, {useState} from 'react';

const Modal = () => {
const [modalShow, setModalShow] = useState(false)

    return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default Modal;