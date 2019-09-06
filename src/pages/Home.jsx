import React from 'react';
import '../App.css';

import Nav from '../components/core/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Footer from '../components/core/Footer/Footer';

class Home extends React.Component {
    render () {
        return (
        <>
            <Nav />
            <Hero />
            <Footer />
        </>
    )
    }
}
export default Home;