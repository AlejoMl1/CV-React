import React from "react";
// import image from "../../assets/images/Projects_screenshot/baner-learnzilla.png";
import "../Modal/Modal.css";
import Project from "./Project";
const urlPage =
  "https://learnzilla-app.vercel.app/";

const urlRepo =
  "https://github.com/dbriceno10/sh_learning-app";

  // https://www.youtube.com/watch?v=BUOpXTn6vc4
const urlVideo = 'https://www.youtube.com/embed/BUOpXTn6vc4'

  const Project01 = () => {
  return (
    <Project
      // srcImg={image}
      proyectTile="Learnzilla"
     
      proyectDesc= {  <div><p>Virtual Academy made in collaboration with a group of 8 developers. We use React-Redux as main technology for the frontend and for the Backend we use NodeJs, Postgres and Sequelize.</p> <p> As extra features we developed an administration panel and also the plataform have two types of users, the professor and student wich have differents permissions and roles in the app.</p>  <p>For further details please read the readme of the project.</p> </div>  }
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Figma, Git/Github."
      urlPage={urlPage}
      urlRepo={urlRepo}
      urlVideo= {urlVideo}
    />

  );
};

export default Project01;
