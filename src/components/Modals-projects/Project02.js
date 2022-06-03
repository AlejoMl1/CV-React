import React from "react";
// import image from "../../assets/images/Projects_screenshot/baner-learnzilla.png";
import "../Modal/Modal.css";
import Project from "./Project";
const urlPage =
  "https://front-spa-food.vercel.app/";

const urlRepo =
  "https://github.com/AlejoMl1/Food-SPA";

  // https://youtu.be/jaGqyXIisSQ
  // https://www.youtube.com/watch?v=BUOpXTn6vc4
const urlVideo = 'https://www.youtube.com/embed/jaGqyXIisSQ'

  const Project02 = () => {
  return (
    <Project
      // srcImg={image}
      proyectTile="Learnzilla"
     
      proyectDesc= {  <div><p>This single page application was created with React-Redux in the Front-end and in the Back-end the data of the recipes was fetched from spooncular API and saved in a local DB using Postgres and Squelize.</p> <p> The app is capable of searching through the different titles and types of recipes, also the user can add custom recipes to the database. </p>  
      
      <p>For further details please read the readme of the project.</p> </div>  }
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Figma, Git/Github."
      urlPage={urlPage}
      urlRepo={urlRepo}
      urlVideo= {urlVideo}
    />

  );
};

export default Project02;
