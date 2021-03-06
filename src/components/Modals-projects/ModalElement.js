import React from "react";
import './ModalElement.css'

const ModalElement = ({ image, e, imgTitle, imgDesc }) => {
  return (
    <div className="modal_element">
      <div className="col folio-item fondo-modal">
        <h6>{imgTitle}</h6>
        <p className="modal-description">{imgDesc}</p>
        <a className="folio-item__thumb" onClick={e}>
          <div className="folio-item__thumb">
            <img src={image} alt="image" className="modal__image" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ModalElement;
