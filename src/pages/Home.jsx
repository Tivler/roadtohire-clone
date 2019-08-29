import React from 'react';
import '../App.css';

import VidHero from '../components/feature/VidHero/VidHero';
import DidYouKnow from '../components/feature/DidYouKnow/DidYouKnow';

class Home extends React.Component {
    render () {
        return (
        <>
            <VidHero />
            <DidYouKnow />
            <div className="filler"></div>
        </>
    )
    }
}
export default Home;