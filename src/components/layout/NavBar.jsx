import styles from './NavBar.module.css'
import { useState } from "react";
import logoImg from  '../../assets/img/vas.jpg'

export default function NavBar(){
        return(
        <nav>
            <a href="">
                <img src={logoImg} width={150}/>
            </a>
            <div className={styles.menu}>
                <a className={styles.navLink} href=''>Home</a>
                <a className={styles.navLink} href=''>About Me</a>
                <a className={styles.navLink} href=''>The Work</a>
                <a className={styles.navLink} href=''>Contact</a>
            </div>
        </nav>
    )
}
