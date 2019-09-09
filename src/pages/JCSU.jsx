import React from 'react';

import Nav from '../components/core/Nav/Nav';
import Hero from '../components/feature/Hero/Hero';
import Footer from '../components/core/Footer/Footer';
import JCSUinfo from '../components/feature/JCSUinfo/JCSUinfo';
import JCSUcontent from '../components/feature/JCSUcontent/JCSUcontent';

const JCSU = () => {
    return (
        <>
            <Nav />
            <Hero 
                class="jcsu"
                title="Johnson C. Smith University" 
                quote='"Our mission is to promote economic mobility through leadership empowerment, professional development, and technical training."'
            />
            <JCSUinfo />
            <JCSUcontent />
            <Footer />
        </>
    )
}

export default JCSU;