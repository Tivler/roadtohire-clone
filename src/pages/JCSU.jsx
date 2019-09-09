import React from 'react';

import Nav from '../components/core/Nav/Nav';
import Hero from '../components/feature/Hero/Hero';
import Footer from '../components/core/Footer/Footer';
import JCSUinfo from '../components/feature/JCSUinfo/JCSUinfo';

const JCSU = () => {
    return (
        <>
            <Nav />
            <Hero 
                class="jcsu"
                title="Road To Hire | JCSU" 
                quote='"Our mission is to promote economic mobility through leadership empowerment, professional development, and technical training."'
            />
            <JCSUinfo />>
            <Footer />
        </>
    )
}

export default JCSU;