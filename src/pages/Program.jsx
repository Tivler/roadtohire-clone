import React from 'react';
import '../App.css';

import AppNav from '../components/core/AppNav/AppNav';
import AppFooter from '../components/core/AppFooter/AppFooter';

import HeroLayout from '../components/shared/HeroLayout/HeroLayout';
import Values from '../components/layout/program/Values/Values';
import Story from '../components/layout/program/Story/Story';
import Student from '../components/layout/program/Student/Student';

const Program = () => {
    return (
        <>
            <AppNav />
            <HeroLayout 
                class="hero"
                title="Program Overview" 
                quote='" I finally feel confident and know that there’s much more success in my future. The program has changed my life completely and has unleashed the powerful woman that I am today. "'
                author="HANNAH DALLA RIVA | SALES '18"
            />
            <Values />
            <Student />
            <Story />
            <AppFooter />
        </>
    )
}

export default Program;