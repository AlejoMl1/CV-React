/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
// import './Header.css' 
import styles from './Header.module.scss';
// import stylesSmall from './HeaderSmall.module.scss';
import { Link } from 'react-router-dom';
// const styles = {...stylesBig, ...stylesSmall };


export default function Header() {
  const [style, setStyle] = useState({
    home:true,
    about:false,
    skills:false,
    portfolio:false
  });
  const changeStyle = (itemToChange) => {
    setStyle( {
        home:false,
        about:false,
        skills:false,
        portfolio:false,
        [itemToChange]: !style[`${itemToChange}`],
  });
  };

  return (
    <nav className={styles.main}> 
            {/* <!-- Logo  --> */}
            <Link to="/" > <a className={styles.logo}>AML</a> </Link>
            <div className={styles.toggle}>
            </div>
            <ul className={styles.menu}>
                <li> 
                  <Link to="/" >
                    <a  className={styles[`home-${style.home}`]}
                        onClick={()=>changeStyle("home")}
                      >Home
                    </a>
                  </Link>    
                </li>
                <li>  <Link to="/aboutMe" > 
                      <a  className={styles[`about-${style.about}`]}
                      onClick={()=>changeStyle("about")}>
                          About
                      </a>
                      </Link> 
                </li>
                <li> <Link to="/skills" ><a className={styles[`skills-${style.skills}`]}
                      onClick={()=>changeStyle("skills")}>Skills</a> </Link></li>
                <li> <Link to="/portfolio" ><a className={styles[`portfolio-${style.portfolio}`]}
                      onClick={()=>changeStyle("portfolio")}>Portfolio</a> </Link>    </li>
                {/* <li> <a href="/portfolio">Contact</a>    </li> */}
            </ul>
            <a href="#" className={styles.lang}>En</a>
    </nav>
)
}