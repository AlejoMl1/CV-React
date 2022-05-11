import React from 'react'
import styles from './FirstSection.module.scss'
import amlBig from './../../assets/images/aml1Big.png'
import amlCircle from './../../assets/images/circleAML.png'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebook, faLinkedin, faGithub);

export default function FirstSection() {
  return (
    <div className={styles.main}>
        <div className={styles.name}>   
            <div className={styles.name_container}>
                <p>Hello</p>
                <h1>I'm <font color="#17d1ac">Alejandro</font>  Muñoz Labrador</h1>
                <img src={amlCircle} alt="author"/>
                <p className={styles.details}> Front-end Developer, Engineer, Entrepreneur</p>
                {/* <!-- cv btn  --> */}
                <a href="./Documents/Alejandro_Munoz_CV_Front-end-English.pdf" className={styles.cvbtn}> Download Cv</a>

            </div>
            <div className={styles.social}>
                {/* <FontAwesomeIcon className={styles.icons} icon={faGithub} /> */}
               
                <a href="https://www.linkedin.com/in/alejandroml1/" className={styles.icons}>  <FontAwesomeIcon icon={["fab", "linkedin"]}  />  </a>
                <a href="https://github.com/AlejoMl1" className={styles.icons2}> <FontAwesomeIcon icon={["fab", "github"]} />  </a>
            </div>  
            
           

        </div>
        <div className={styles.name_right}>
                <img src={amlBig} alt="author profile"/>
        </div>

        <div className={styles.arrow}></div>
    </div>
  )
}
