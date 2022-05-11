import React from 'react'
import amlImage from './../../assets/images/final_1.png'
import styles from './AboutMe.module.scss'

export default function AboutMe() {
  return (
    <div className={styles.about}>
        <div className={styles['about-text']}>
            <h1>About Me</h1>
            <div className={styles['about-general']}>
                <p className="first-p"> During my BSc in civil Engineering , I wrote my first lines of code in Visual Basic and quickly discovered my passion to resolve problems though algorithms. </p>
                    <p>
                    Front-end and Back-end Web development calls to all my passions; it incorporates creativity and problem solving.  </p>
                    <p>
                    When I finished my degree I decided to turn my passion into my career and started my path as a web developer, after more than 800 + hours of coding in Henry's bootcamp I've learned how to implement within real projects a wide range of technologies such as : React-Redux, JavaScript, Node Js, SQL, Sequelize , HTML, CSS among many others.
                    </p>
                    {/* <p>
                    However this is just the beginning in this new path, I love coding everyday and eager to expand my knowledge learning new technology that involves Front and Back-end development.
                    </p> */}
                    <p>
                    I would like to be part of a team where I can keep growing in the IT world. </p>
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
