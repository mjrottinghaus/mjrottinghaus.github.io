import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Home.module.css";

export const Home = () => {
    return (
        <section className={styles.container}>
            {/* Text on the left hand side */}
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to my website!</h1>
                <p className={styles.description}>
                    I'm a software developer with experience using Python, C/C++, JavaSciprt/TypeScript. 
                    Check out my experience and projects, and reach out if you'd like to learn more about them!
                </p>
                <a href="mailto:mrott0902@yahoo.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("home/profile.jpg")} alt="Picture of Matthew" className={styles.profilePicture}></img>

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
