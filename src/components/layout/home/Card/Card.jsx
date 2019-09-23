import React from 'react';
import './_styles.scss'

import CardLayout from '../../../shared/CardLayout/CardLayout';

import { faLaptopCode, faCloudDownloadAlt, faDesktop } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    return (
        <section className="cards--wrapper">
            <CardLayout 
                icon={faCloudDownloadAlt}
                title="CYBER SECURITY" 
                content="If you want to help protect peoples’ livelihood and privacy, 
                enjoy being on your toes and like keeping your mind engaged, 
                the Cyber Security track is the track for you. "
                itemOne="Intro to Security and Privacy 101"
                itemTwo="Cloud Computing"
                itemThree="Phishing, Risk, and Threat Intelligence"
                itemFour="Operational Security" 
            />

            <CardLayout 
                icon={faLaptopCode}
                title="CODING" 
                content="If you’re tech-savvy and have an interest in coding for a living, 
                consider a career in software engineering by joining our Code Academy."
                itemOne="Git and Github"
                itemTwo="HTML, CSS, and JavaScript"
                itemThree="React, MySQL, Node.js, WebAPIs"
                itemFour="Web Accessibility and Security" 
            />

            <CardLayout 
                icon={faDesktop}
                title="IT DESKTOP SUPPORT" 
                content="If you love helping people solve problems and have a passion for fixing issues, 
                check out the IT Desktop Support career track."
                itemOne="Intro to IT and Desktop Support"
                itemTwo="A+ Certification"
                itemThree="Network + Certification"
                itemFour="On-the-job training" 
            />
        </section>
    )
}

export default Card;