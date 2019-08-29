import React from 'react';
import '../App.css';

import VidHero from '../components/feature/VidHero/VidHero';
import DidYouKnow from '../components/feature/DidYouKnow/DidYouKnow';
import Impact from '../components/feature/Impact/Impact';

class Home extends React.Component {
    render () {
        return (
        <>
            <VidHero />
            <DidYouKnow />
            <Impact />
        </>
    )
    }
}
export default Home;