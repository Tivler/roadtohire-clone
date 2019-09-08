import React from 'react';
import '../App.css';

import Nav from '../components/core/Nav/Nav';
import VideoHero from '../components/feature/VideoHero/VideoHero';
import Info from '../components/feature/Info/Info';
import Footer from '../components/core/Footer/Footer';
import ContentDivider from '../components/feature/ContentDivider/ContentDivider';
import CardSection from '../components/feature/CardSection/CardSection';
import Mission from '../components/feature/Mission/Mission';

class Home extends React.Component {
    render () {
        return (
        <div className="home">
            <Nav />
            <VideoHero />
            <Mission />
            <Info />
            <CardSection />
            <ContentDivider />
            <Footer />
        </div>
    )
    }
}
export default Home;