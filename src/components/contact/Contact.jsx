import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:matthew@rottingha.us">matthew@rottingha.us</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/mrottinghaus/">linkedin.com/in/mrottinghaus/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                    <a href="https://github.com/mjrottinghaus">github.com/mjrottinghaus</a>
                </li>
            </ul>
        </footer>
    )
}
