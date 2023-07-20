import React, { useState } from "react";
import "./Index.css";
import ModalTHumb from "./ModalThumb";
import imgLearnzilla from "../../assets/images/Projects_screenshot/miniatura-learnzilla.png";
import imgfoodApp from "../../assets/images/Projects_screenshot/foodmini.png";
import imgTicToc from "../../assets/images/Projects_screenshot/tictactoe.png";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModalLearnzilla, setIsOpenModalLearnzilla] = useState(false);
  const [isOpenModalFoodApp, setIsOpenModalFoodApp] = useState(false);
  const [isOpenModalTicToc, setIsOpenModalTicToc] = useState(false);
  const projectsInfo = [
    {
      modalThumbInfo: {
        img: imgLearnzilla,
        title: "Learnzilla",
        briefDescription: "Platform to teach and learn about any topic",
        setIsOpenModal: setIsOpenModalLearnzilla,
      },
      ModalInternalInfo: {
        title: "Learnzilla",
        description: [
          <p key="p1">
            Virtual Academy made in collaboration with a group of 8 developers.
            We use React-Redux as the main technology for the frontend and for
            the Backend we use NodeJs, Postgres, and Sequelize.
          </p>,
          <span></span>,
          <p key="p2">
            As extra features we developed an administration panel and also the
            platform has two types of users, the professor and student which
            have different permissions and roles in the app.
          </p>,
          <span></span>,
          <p key="p3">
            For further details please read the readme of the project.
          </p>,
        ],
        urlPage: "https://learnzilla-app.vercel.app/",
        urlRepo: "https://github.com/dbriceno10/sh_learning-app",
        //   urlVideo: "https://www.youtube.com/embed/BUOpXTn6vc4",
        urlVideo: "https://www.youtube.com/embed/jaGqyXIisSQ",
        isOpen: isOpenModalLearnzilla,
        // setIsOpen: setIsOpenModalLearnzilla,
      },
    },
    {
      modalThumbInfo: {
        img: imgfoodApp,
        title: "Food App",
        briefDescription: "Search,create, edit recipes",
        setIsOpenModal: setIsOpenModalFoodApp,
      },
      ModalInternalInfo: {
        title: "Food App",
        description: [
          <p key="p1">
            This single page application was created with React-Redux in the
            Front-end and in the Back-end the data of the recipes was fetched
            from spooncular API and saved in a local DB using Postgres and
            Squelize.
          </p>,
          <span></span>,
          <p key="p2">
            The app is capable of searching through the different titles and
            types of recipes, also the user can add custom recipes to the
            database.
          </p>,
          <span></span>,
          <p key="p3">
            For further details please read the readme of the project.
          </p>,
        ],
        urlPage: "https://front-spa-food.vercel.app/",
        urlRepo: "https://github.com/AlejoMl1/Food-SPA",
        urlVideo: "https://www.youtube.com/embed/jaGqyXIisSQ",
        isOpen: isOpenModalFoodApp,
      },
    },
    {
      modalThumbInfo: {
        img: imgTicToc,
        title: "Tic-Tac-Toe",
        briefDescription: "Classic Tic-tac-toe made with React Js",
        setIsOpenModal: setIsOpenModalTicToc,
      },
      ModalInternalInfo: {
        title: "Tic-Tac-Toe",
        description: [
          <p key="p1">
            Classic tic toc toe made with React, CSS and Node Js. Full
            responsive.
          </p>,
        ],
        urlPage:
          "https://tic-toc-toe-react-git-main-alejoml1.vercel.app/?vercelToolbarCode=yiNIpkDxbcswl5Q",

        urlRepo: "https://github.com/AlejoMl1/tic-toc-toe-react",
        urlVideo: "https://youtube.com/embed/Vmy_tGMwWg8",
        isOpen: isOpenModalTicToc,
      },
    },
  ];

  return (
    <div className="main_container">
      <div className="thumbs_container">
        {projectsInfo.map((projectData, index) => {
          return (
            <>
              <ModalTHumb
                key={`${projectData.modalThumbInfo.title} ${index}`}
                img={projectData.modalThumbInfo.img}
                title={projectData.modalThumbInfo.title}
                briefDescription={projectData.modalThumbInfo.briefDescription}
                setIsOpenModal={projectData.modalThumbInfo.setIsOpenModal}
              />
              <Modal
                projectData={projectData.ModalInternalInfo}
                isOpen={projectData.ModalInternalInfo.isOpen}
                setIsOpen={projectData.modalThumbInfo.setIsOpenModal}
              />
            </>
          );
        })}
      </div>

      {/* <div className="other_content"></div> */}
    </div>
  );
};

export default Modals;
