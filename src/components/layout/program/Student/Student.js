import React from 'react';
import './_styles.scss';

import { Link } from 'react-router-dom';

const Student = () => {
    return (
        <>
            <section className="student">
                <div className="student--wrapper">
                    <h3 className="student__title">Being a Road To Hire Student:</h3>
                        <p className="student__content">Our  six month training is directly applicable to your new career field — and we’ll pay you along the way. Regardless of career track, you’ll grow through personal and professional development seminars that will support you wherever you go.</p>
                        <p className="student__content">We eliminate any barriers you may have, paying a competitive wage and a <Link className="student--link" to="/">varitety of services</Link> to make sure you have everything you need to participate in the program. In return, we demand passion and commitment. You are required to have excellent attendance and performance in order to graduate the program. </p>
                        <p className="student__content">On top of all of this — Road to Hire is <strong>fun</strong>. You will form lifelong relationships and take part in team building activities throughout the Charlotte region. </p>
                        <p className="student__content">Our commitment to you is that by the end of you experience, you will be…</p>
                    <h4 className="student__subtitle">Marketable. Independent. Connected. Confident.</h4>
                        <p className="student__content"><strong>More Marketable</strong> — Equipped with the skills and knowledge to find the job you want and navigate future growth opportunities in your career</p>
                        <p className="student__content"><strong>More Independent</strong> — Equipped with the tools to gain more control of your life and have a strong foundation upon which to build lifelong habits for success</p>
                        <p className="student__content"><strong>More Connected</strong> — Become part of a network of young professionals and be exposed to rich cultural experiences</p>
                        <p className="student__content"><strong>More Confident</strong> — Empowered to let your voice be heard and your story be told  </p>
                        <a className="student__button" href="https://boards.greenhouse.io/road2hire/jobs/1830097?gh_src=ee07e9541"  rel="noopener noreferrer" target="_blank">Apply Now</a>
                </div>
            </section>
        </>
    )
}

export default Student;