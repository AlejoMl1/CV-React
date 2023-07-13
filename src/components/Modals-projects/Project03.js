import React from "react";
// import image from "../../assets/images/Projects_screenshot/baner-learnzilla.png";
import "../Modal/Modal.css";
import Project from "./Project";
const urlPage =
  "https://tic-toc-toe-react-git-main-alejoml1.vercel.app/?vercelToolbarCode=yiNIpkDxbcswl5Q";

const urlRepo = "https://github.com/AlejoMl1/tic-toc-toe-react";

// https://youtu.be/jaGqyXIisSQ
// https://www.youtube.com/watch?v=BUOpXTn6vc4
const urlVideo = "https://youtube.com/embed/Vmy_tGMwWg8";

const Project02 = () => {
  return (
    <Project
      // srcImg={image}
      proyectTile="Tic tac toe"
      proyectDesc={
        <div>Classic tic toc toe made with React, CSS and node Js.</div>
      }
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Figma, Git/Github."
      urlPage={urlPage}
      urlRepo={urlRepo}
      urlVideo={urlVideo}
    />
  );
};

export default Project02;
