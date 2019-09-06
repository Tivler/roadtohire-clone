import React from 'react';
import './_VideoHero.scss';

const VideoHero = () => {
    return (
        <>
        <section className="section">
            <video className="section__video" src="videos/rthvid.mp4" autoPlay muted loop></video>
        </section>
        </>
    )
}
export default VideoHero;