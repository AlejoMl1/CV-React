import React from "react";
import "./Modal.css";

const Modal = ({ projectData, isOpen, setIsOpen }) => {
  const { title, description, tecnologiesUsed, urlPage, urlRepo, urlVideo } =
    projectData;

  const handleModalContainerClick = (e) => e.stopPropagation();
  console.log("isOpen", `${title} ${isOpen}`);

  const onClose = (arg) => {
    console.log("onclose:", arg);
  };

  return (
    <article
      onClick={() => setIsOpen(false)}
      className={`modal ${isOpen && "is-open"}`}
    >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={() => setIsOpen(false)}>
          <span className="x">X</span>
        </button>
        <div className="modal-internal-container">
          <div className="modal__title">
            <h1>{title}</h1>
          </div>

          <div className="modal-video">
            <iframe
              src={urlVideo}
              frameborder="0"
              // allowfullscreen="allowFullscreen"
              // mozallowfullscreen="mozallowfullscreen"
              // msallowfullscreen="msallowfullscreen"
              // oallowfullscreen="allowfullScreen"
              // webkitallowfullscreen="webkitallowFullscreen"
            ></iframe>
          </div>
          <div className="modal-description">
            {description.map((item) => item)}
          </div>

          <div className="link-container">
            <a target="_blank" href={urlPage}>
              {" "}
              <button className="btn btn_primary">Visit Page</button>{" "}
            </a>
            <a target="_blank" href={urlRepo}>
              {" "}
              <button className="btn btn_primary">View Code Github</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
