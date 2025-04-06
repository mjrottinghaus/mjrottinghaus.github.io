import React from 'react'
import sytles from "./About.module.css"
import { getImageUrl } from '../../utils'


export const About = () => {
  return (
    <section className={sytles.container} id='about'>
        <h2 className={sytles.title}>About</h2>
        <div className={sytles.content}>
            <img src={getImageUrl("about/aboutMe.jpg")}
                 alt="Matthew At Yosemite National Park"
                 className={sytles.aboutImage}/>
            <ul className={sytles.aboutItems}>
                <li className={sytles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={sytles.aboutItemText}>
                        <h3>Software Developer</h3>
                        <p>I have experience devloping JS and C/C++ applications for deployment on small form-factor devices.  I've worked in a variety of stacks from firmware development to developing frontends in React and Vue.</p>
                    </div>
                </li>
                <li className={sytles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={sytles.aboutItemText}>
                        <h3>Robotics Judge/Mentor</h3>
                        <p>I help give back to the STEM/Robotics community by serving as a Judge Advisor for VEX Robotics in Colorado and beyond!  I have a special affinity for my home program of Berthoud Robotics which I help teams with their software skills and the club's local tournament.</p>
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
