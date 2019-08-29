import React from 'react';
import './_VidHero.scss';

const VidHero = () => {
    return (
        <>
        <section className="section">
            <video className="section__video" src="videos/rthvid.mp4" autoPlay muted loop></video>
            <div className="content">
                <h2 className="content__heading">Road to Hire provides underserved young adults with paid professional development and technical training — opening a direct pathway into high-earning careers.</h2>
                <p className="content__subhead">Start a career in Cyber Security or Software Engineering by joining one of our academies today!</p>
                <a className="content__button" href="https://boards.greenhouse.io/road2hire/jobs/1830097?gh_src=ee07e9541"  rel="noopener noreferrer" target="_blank">Apply Now</a>
            </div>
        </section>
        </>
    )
}

export default VidHero;