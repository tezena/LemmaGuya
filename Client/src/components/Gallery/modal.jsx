import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = ({ image, showModal, closeModal }) => {
    if (image != null) 
    return (   
      <Modal show={showModal} onHide={closeModal} centered size={"lg"}>
        <Modal.Body>
          <img src={image.imageUrl} alt={image.title} className="img-fluid" />
        </Modal.Body>
      </Modal>
    );
};
  
export default ModalComponent;