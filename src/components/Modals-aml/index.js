import React, { useState } from "react";
import "./Index.css";
import ModalTHumb from "./ModalThumb";
import imgLearnzilla from "../../assets/images/Projects_screenshot/miniatura-learnzilla.png";
import imgfooApp from "../../assets/images/Projects_screenshot/foodmini.png";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModalLearnzilla, setIsOpenModalLearnzilla] = useState(false);
  const [isOpenModalFooApp, setIsOpenModalFoodApp] = useState(false);
  const [isOpenModalTicToc, setIsOpenModalTicToc] = useState(false);
  const projectsInfo = [
    {
      modalThumbInfo: {
        img: imgLearnzilla,
        title: "Learnzilla",
        briefDescription: "Platform to teach and learn about any topic",
        // setIsOpenModal: setIsOpenModalLearnzilla(),
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
        isOPen: isOpenModalLearnzilla,
        onclose: setIsOpenModalLearnzilla,
      },
    },
    {
      modalThumbInfo: {
        img: imgfooApp,
        title: "Food App",
        briefDescription: "Search,create, editc recipes",
        setIsOpenModal: setIsOpenModalFoodApp,
      },
      ModalInternalInfo: {
        title: "Food App",
        description: [
          <p key="p1">
            s single page application was created with React-Redux in the
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
        isOPen: isOpenModalFooApp,
        onclose: setIsOpenModalFoodApp,
      },
    },
    {
      modalThumbInfo: {
        img: imgLearnzilla,
        title: "Learnzilla",
        briefDescription: "Platform to teach and learn about any topic",
        // setIsOpenModal: setIsOpenModalLearnzilla(),
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
        isOPen: isOpenModalLearnzilla,
        onclose: setIsOpenModalLearnzilla,
      },
    },
  ];

  return (
    <div className="main_container">
      <div className="thumbs_container">
        {projectsInfo.map((projectData, index) => {
          return (
            <ModalTHumb
              key={`${projectData.modalThumbInfo.title} ${index}`}
              img={projectData.modalThumbInfo.img}
              title={projectData.modalThumbInfo.title}
              briefDescription={projectData.modalThumbInfo.briefDescription}
              setIsOpenModal={projectData.modalThumbInfo.setIsOpenModal}
            />
          );
        })}
        {/* <ModalTHumb
          img={projectsInfo[0].modalThumbInfo.img}
          title={projectsInfo[0].modalThumbInfo.title}
          briefDescription={projectsInfo[0].modalThumbInfo.briefDescription}
          setIsOpenModal={setIsOpenModalLearnzilla}
        /> */}
        {/* <ModalTHumb
          img={imgLearnzilla}
          title={"d"}
          briefDescription={"bla bla"}
          // setIsOpenModal={setIsOpenModalLearnzilla}
        /> */}
      </div>
      {/* <Modal
        projectData={projectsInfo[0].ModalInternalInfo}
        isOpen={isOpenModalLearnzilla}
        onCLose={() => setIsOpenModalLearnzilla(false)}
      /> */}
      {/* <div className="other_content"></div> */}
    </div>
  );
};

export default Modals;
