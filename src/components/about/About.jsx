import React from 'react'
import sytles from "./About.module.css"
import { getImageUrl } from '../../utils'


export const About = () => {
  return (
    <section className={sytles.container} id='about'>
        <h2 className={sytles.title}>About</h2>
        <div className={sytles.content}>
            <img src={getImageUrl("about/aboutMe.jpg")}
                 alt="Matthew as Judge Advisor with judging team at VEX Worlds 2025"
                 className={sytles.aboutImage}/>
            <ul className={sytles.aboutItems}>
                <li className={sytles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={sytles.aboutItemText}>
                        <h3>Software Developer</h3>
                        <p>I have experience devloping JS and C/C++ applications for deployment on small form-factor devices.  I've worked in a variety of stacks from firmware development to developing frontends in React and Vue.  My current work focuses on embedded operating systems (including Yocto and Android).</p>
                    </div>
                </li>
                <li className={sytles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={sytles.aboutItemText}>
                        <h3>Robotics Judge/Mentor</h3>
                        <p>I help give back to the STEM/Robotics community by serving as a Judge Advisor for VEX Robotics in Colorado and beyond.  Nothing gets me up early on a Saturday like getting to help support the next generation of engineers!</p>
                    </div>
                </li>
                <li className={sytles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon"/>
                    <div className={sytles.aboutItemText}>
                        <h3>Outdoors/Sports Enthusiast</h3>
                        <p>Outside of tech, I love getting outside and hiking in the Rocky Mountains (Sky Pond in RMNP is my favorite!).  I also have a deep love of sports and the analytics associated with them (particularly in baseball).</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
)
}
