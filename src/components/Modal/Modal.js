import React from "react";
import './Modal.css'

const Modal = ({ children, isOpen, closeModal }) => {
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_stoppropagation
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          <span className="x">X</span>
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
