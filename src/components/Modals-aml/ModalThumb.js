import React from "react";
import "./ModalThumb.css";

const ModalThumb = ({ img, title, briefDescription, setIsOpenModal }) => {
  return (
    <div className="modalThumb">
      <h6>{title}</h6>
      <div className="modalThumb_image">
        <img
          src={img}
          alt="image"
          // onClick={() => setIsOpenModal(true)}
        />
      </div>
      <div>
        <p>{briefDescription}</p>
      </div>
    </div>
  );
};

export default ModalThumb;
