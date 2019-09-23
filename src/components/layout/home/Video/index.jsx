import React from 'react';
import './_styles.scss';

const Video = () => {
    return (
        <>
        <section className="mainhero">
            <video className="mainhero__video" src="videos/rthvid.mp4" autoPlay muted loop></video>
        </section>
        </>
    )
}
export default Video;