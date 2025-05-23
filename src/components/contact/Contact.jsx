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
                    <a href="mailto:mrott0902@yahoo.com">mrott0902@yahoo.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/matthew-r-105a29130/">linkedin.com/in/matthew-r-105a29130/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                    <a href="https://github.com/mjrottinghaus">github.com/mjrottinghaus</a>
                </li>
            </ul>
        </footer>
    )
}
