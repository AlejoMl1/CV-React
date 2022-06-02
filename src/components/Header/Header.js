/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import './Header.css' 
import styles from './Header.module.scss';


export default function Header() {
  return (
    <nav className={styles.main}> 
            {/* <!-- Logo  --> */}
            <a href="#" className={styles.logo}>AML</a>
            <div className={styles.toggle}>
            </div>
            <ul className={styles.menu}>
                <li> <a href="/" className={styles.active}>Home</a>    </li>
                <li> <a href="/aboutMe">About</a>    </li>
                <li> <a href="/skills">Skills</a>    </li>
                <li> <a href="/portfolio">Portfolio</a>    </li>
                <li> <a href="/portfolio">Contact</a>    </li>
            </ul>
            <a href="#" className={styles.lang}>En</a>
    </nav>
)
}