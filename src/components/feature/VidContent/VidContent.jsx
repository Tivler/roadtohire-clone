import React from 'react';
import './_VidContent.scss';

import { Link } from 'react-router-dom';

const VidContent = () => {
    return (
        <>
            <section className="vidcontent">
                <div className="vidcontent--wrapper">
                    <h2 className="vidcontent__title">Our Mission</h2>
                    <p className="vidcontent__mission">In our Road to Hire Academies, we’re looking for talented, tech-hungry young adults who are looking to break into the world of technology without a college degree! Being in tech isn’t easy, but you’ll be given access to world class resources, and state of the art facilities to learn and polish your craft.</p>
                    <Link className="vidcontent--btn" to="/">Apply Now</Link>
                </div>
            </section>
        </>
    )
}

export default VidContent;