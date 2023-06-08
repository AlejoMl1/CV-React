import React from 'react'
import amlImage from './../../assets/images/final_1.png'
import styles from './AboutMe.module.scss'

export default function AboutMe() {
  return (
    <div className={styles.about}>
        <div className={styles['about-text']}>
            <h1>About Me</h1>
            <div className={styles['about-general']}>
                <p className="first-p"> After completing my BSc in civil Engineering, I embarked on a transformative journey in web development. Through an immersive bootcamp experience, I dedicated over 800 hours to mastering a wide range of essential technologies, including React, Redux, JavaScript, SQL, Sequelize, HTML,  and CSS.  </p>
                    
                    <p>
                    In my first job I worked as a backend developer, I specialized in harnessing the power of Node.js with TypeScript. This expertise enabled me to create secure and efficient Lambda functions, each equipped with its own URL and fortified by JSON Web Tokens (JWTs) for enhanced security measures. Additionally, I upheld the reliability of RESTful APIs by diligently conducting comprehensive unit testing using Jest.
                    </p>
                    <p>
                    I am eager to join a dynamic team where I can contribute my technical expertise to develop innovative solutions.
                    </p>
            </div>
            
        </div>

        <div className={styles["about-text-movil"]}>
            <h1>About Me</h1>
            <p>During my BSc in civil Engineering , I wrote my first lines of code in Visual Basic and quickly discovered my passion to resolve problems though algorithms.
            <br/>
                
            When I finished my degree I decided to turn my passion into my career and started my path as a web developer, after more than 800 + hours of coding in Henry's bootcamp I've learned how to implement within real projects a wide range of technologies such as : React-Redux, JavaScript, Node Js, SQL, Sequelize , HTML, CSS among many others.
            <br/>
            However this is just the beginning in this new path , I love coding everyday and eager to expand my knowledge learning new technology that involves Front and Back-end development.
            </p>
        </div>
    
        <div className={styles["about-model"]}>
            <img src={amlImage} alt="model"/>
    
        </div>
    </div>
  )
}
