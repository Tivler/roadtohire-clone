import React from 'react';
import './_VidHero.scss';

const VidHero = () => {
    return (
        <>
        <section className="section">
            <video className="section__video" src="videos/rthvid.mp4" autoPlay muted loop></video>
        </section>
        </>
    )
}

export default VidHero;