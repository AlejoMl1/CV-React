import React from "react";
import amlImage from "./../../assets/images/final_1.png";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles["about-text"]}>
        <h1>About Me</h1>
        <div className={styles["about-general"]}>
          <p className="first-p">
            {" "}
            After obtaining my BSc in civil Engineering, I transitioned into web
            development through an intensive bootcamp program. With over 800
            hours dedicated to mastering various essential technologies such as
            React, Redux, JavaScript, SQL, Sequelize, HTML, and CSS, I gained a
            solid foundation in web development.
          </p>

          <p>
            In my previous role as a backend developer, I focused on utilizing
            Node.js with TypeScript to create secure and efficient Lambda
            functions. I ensured the integrity and security of these functions
            by implementing JSON Web Tokens (JWTs) and conducted thorough unit
            testing using Jest to maintain reliable RESTful APIs.
          </p>
          <p>
            I am now seeking an opportunity to join a dynamic team where I can
            contribute my technical expertise and collaborate on developing
            innovative solutions.
          </p>
        </div>
      </div>

      <div className={styles["about-text-movil"]}>
        <h1>About Me</h1>
        <p>
          During my BSc in civil Engineering , I wrote my first lines of code in
          Visual Basic and quickly discovered my passion to resolve problems
          though algorithms.
          <br />
          When I finished my degree I decided to turn my passion into my career
          and started my path as a web developer, after more than 800 + hours of
          coding in Henry's bootcamp I've learned how to implement within real
          projects a wide range of technologies such as : React-Redux,
          JavaScript, Node Js, SQL, Sequelize , HTML, CSS among many others.
          <br />
          However this is just the beginning in this new path , I love coding
          everyday and eager to expand my knowledge learning new technology that
          involves Front and Back-end development.
        </p>
      </div>

      <div className={styles["about-model"]}>
        <img src={amlImage} alt="model" />
      </div>
    </div>
  );
}
