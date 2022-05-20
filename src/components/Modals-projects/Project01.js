import React from "react";
// import image from "../../assets/images/Projects_screenshot/baner-learnzilla.png";
import "../Modal/Modal.css";
import Project from "./Project";
const URL =
  "https://dbriceno10.github.io/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First/";

const urlRepo =
  "https://github.com/dbriceno10/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First";

const urlVideo = 'https://www.youtube.com/embed/_HEnohs6yYw'

  const Project01 = () => {
  return (
    <Project
      // srcImg={image}
      proyectTile="Learnzilla"
     
      proyectDesc= {  <div><p>Virtual Academy made in collaboration with a group of 8 developers. We use React-Redux as main technology for the frontend and for the Backend we use NodeJs, Postgres and Sequelize.</p> <br/> <p> There are two types of profile user, one for the students and other for the docents.</p> </div>  }
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Figma, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
      urlVideo= {urlVideo}
    />

  );
};

export default Project01;
