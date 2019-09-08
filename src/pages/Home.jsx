import React from 'react';
import '../App.css';

import VideoHero from '../components/feature/VideoHero/VideoHero';
import Info from '../components/feature/Info/Info';
import ContentDivider from '../components/feature/ContentDivider/ContentDivider';
import CardSection from '../components/feature/CardSection/CardSection';
import Mission from '../components/feature/Mission/Mission';

class Home extends React.Component {
    render () {
        return (
        <div className="home">
            <VideoHero />
            <Mission />
            <Info />
            <CardSection />
            <ContentDivider />
        </div>
    )
    }
}
export default Home;