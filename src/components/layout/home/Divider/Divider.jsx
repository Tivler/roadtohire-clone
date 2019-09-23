import React from 'react';
import './_styles.scss';

const Divider = () => {
    return (
        <>
        <section className="content">
            <div className="content--wrapper">
                <img className="content__icon" src="images/roadtohireicon.jpg" alt="Road To Hire Icon"/>
                <h2 className="content__heading">Road to Hire provides underserved young adults with paid professional development and technical training — opening a direct pathway into high-earning careers.</h2>
                <p className="content__subhead">Start a career in Cyber Security or Software Engineering by joining one of our academies today!</p>
                <a className="content__button" href="https://boards.greenhouse.io/road2hire/jobs/1830097?gh_src=ee07e9541"  rel="noopener noreferrer" target="_blank">Apply Now</a>
            </div>
        </section>
        </>
    )
}
export default Divider;