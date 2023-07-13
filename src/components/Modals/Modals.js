import React from "react";
import Modal from "../Modal/Modal";
import "../Modal/Modal.css";

import { useModal } from "../Modal/useModal";
import ModalElement from "../Modals-projects/ModalElement";
import Modal01 from "../../assets/images/Projects_screenshot/miniatura-learnzilla.png";
import Project01 from "../Modals-projects/Project01";

import Modal02 from "../../assets/images/Projects_screenshot/foodmini.png";
import Project02 from "../Modals-projects/Project02";

import Modal03 from "../../assets/images/Projects_screenshot/tictactoe.png";
import Tictactoe from "../Modals-projects/Project03";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  return (
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <ModalElement
        image={Modal01}
        e={openModal1}
        imgTitle="Learnzilla Academy"
        imgDesc="Plataform to teach and learn about any topic"
      />
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <Project01 />
      </Modal>

      <ModalElement
        image={Modal02}
        e={openModal2}
        imgTitle="Food App"
        imgDesc="Search and create recipes"
      />
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <Project02 />
      </Modal>
      <ModalElement
        image={Modal03}
        e={openModal3}
        imgTitle="Tic-tac-toe"
        imgDesc="Classic Tic-tac-toe game"
      />
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <Tictactoe />
      </Modal>
    </div>
  );
};

export default Modals;
