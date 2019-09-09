import React from 'react';
import '../App.css';

import Hero from '../components/feature/Hero/Hero';
import ValuesSection from '../components/feature/ValuesSection/ValuesSection';
import Nav from '../components/core/Nav/Nav';
import Footer from '../components/core/Footer/Footer';
import Student from '../components/feature/Student/Student';
import CardSection from '../components/feature/CardSection/CardSection';
import TestimonialSection from '../components/feature/TestimonialSection/TestimonialSection';

const Program = () => {
    return (
        <>
            <Nav />
            <Hero 
                title="Program Overview" 
                quote='" I finally feel confident and know that there’s much more success in my future. The program has changed my life completely and has unleashed the powerful woman that I am today. "'
                author="HANNAH DALLA RIVA | SALES '18"
            />
            <ValuesSection />
            <CardSection />
            <Student />
            <TestimonialSection />
            <Footer />
        </>
    )
}

export default Program;