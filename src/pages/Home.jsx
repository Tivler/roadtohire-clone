import React from 'react';
import '../App.css';

import Nav from '../components/core/Nav/Nav';
import VideoHero from '../components/feature/VideoHero/VideoHero';
import Info from '../components/feature/Info/Info';
import Footer from '../components/core/Footer/Footer';
import ContentDivider from '../components/feature/ContentDivider/ContentDivider';
import VidContent from '../components/feature/VidContent/VidContent';
import CardSection from '../components/feature/CardSection/CardSection';

class Home extends React.Component {
    render () {
        return (
        <>
            <Nav />
            <VideoHero />
            <VidContent />
            <CardSection />
            <Info />
            <ContentDivider />
            <Footer />
        </>
    )
    }
}
export default Home;