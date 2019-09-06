import React from 'react';
import './_CardSection.scss'

import Card from '../../layout/Card/Card';

const CardSection = () => {
    return (
        <section className="cards">
            <Card title="CYBER SECURITY" 
            content="If you want to help protect peoples’ livelihood and privacy, 
            enjoy being on your toes and like keeping your mind engaged, 
            the Cyber Security track is the track for you. " />

            <Card title="CODING" 
            content="If you’re tech-savvy and have an interest in coding for a living, 
            consider a career in software engineering by joining our Code Academy." />

            <Card title="IT DESKTOP SUPPORT" 
            content="If you love helping people solve problems and have a passion for fixing issues, 
            check out the IT Desktop Support career track." />
        </section>
    )
}

export default CardSection;