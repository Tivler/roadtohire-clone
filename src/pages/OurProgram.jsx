import React from 'react';
import '../App.css';

import ImageHero from '../components/feature/ImageHero/ImageHero';

class OurProgram extends React.Component {
    render () {
        return (
        <>
            <div className="filler">
                Our Program
            </div>
            <ImageHero />
        </>
    )
    }
}
export default OurProgram;