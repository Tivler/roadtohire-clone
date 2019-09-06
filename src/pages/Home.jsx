import React from 'react';
import '../App.css';

import Nav from '../components/core/Nav/Nav';
import VideoHero from '../components/VideoHero/VideoHero';
import Info from '../components/Info/Info';
import Footer from '../components/core/Footer/Footer';
import ContentDivider from '../components/ContentDivider/ContentDivider';
import VidContent from '../components/VidContent/VidContent';

class Home extends React.Component {
    render () {
        return (
        <>
            <Nav />
            <VideoHero />
            <VidContent />
            <Info />
            <ContentDivider />
            <Footer />
        </>
    )
    }
}
export default Home;