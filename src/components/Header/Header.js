/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import './Header.css' 
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className={styles.main}> 
            {/* <!-- Logo  --> */}
            <Link to="/" > <a className={styles.logo}>AML</a> </Link>
            <div className={styles.toggle}>
            </div>
            <ul className={styles.menu}>
                <li> 
                  <Link to="/" >
                    <a  className={styles.active}>Home</a>
                  </Link>    
                </li>
                <li>  <Link to="/aboutMe" > <a >About</a></Link> </li>
                <li> <Link to="/skills" ><a>Skills</a> </Link></li>
                <li> <Link to="/portfolio" ><a>Portfolio</a> </Link>    </li>
                {/* <li> <a href="/portfolio">Contact</a>    </li> */}
            </ul>
            <a href="#" className={styles.lang}>En</a>
    </nav>
)
}