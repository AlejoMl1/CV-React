import React from "react";
import './Project.css';

const Project = ({
  proyectTile: projectTitle,
  proyectDesc: projectDesc,
  tecn,
  urlPage,
  urlRepo,
  btnPage,
  urlVideo
}) => {
  return (
    <div className="modal-internal-container">
      
        <div className="modal__title">
          <h1>{projectTitle}</h1>
        </div>

        <div className="modal-video">
            <iframe src={urlVideo} frameborder="0" allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
        </div>
        <div className="modal-descriptionn">
          <p>
            {/* <h6> Tecnologies used:</h6> */}
            {projectDesc}
            {/* <br />
            {tecn} */}
          </p>

        </div>
       
        <div className="link-container">
          {/* <button       onClick={(e) => {
      e.preventDefault();
      window.location.href=`$${urlPage}`;
      }} type="button" target="__blank" className="btn btn_primary">
            {btnPage ? btnPage : <p>Visit Page</p>}
          </button> */}
      
      <a target="_blank" href={urlPage}> <button className="btn btn_primary" >Visit Page</button> </a>
      <a target="_blank" href={urlRepo}> <button className="btn btn_primary" >View Code Github</button> </a>
          {/* <button href={urlRepo} target="__blank" className="btn btn_secundary">
            View Code
          </button> */}
        </div>
    </div>
  );
};

export default Project;
