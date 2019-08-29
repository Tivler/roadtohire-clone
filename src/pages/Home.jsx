import React from 'react';
import '../App.css';

import VidHero from '../components/feature/VidHero/VidHero';

class Home extends React.Component {
    render () {
        return (
        <>
            <VidHero />
            <div className="filler"></div>
        </>
    )
    }
}
export default Home;