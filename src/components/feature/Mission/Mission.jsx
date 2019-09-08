import React from 'react';
import './_Mission.scss';

import { Link } from 'react-router-dom';

const Mission = () => {
    return (
        <>
            <section className="mission">
                <div className="mission--wrapper">
                    <h2 className="mission__title">Our Impact</h2>
                    <p className="mission__statement">In our Road to Hire Academies, we’re looking for talented, tech-hungry young adults who are looking to break into the world of technology without a college degree! Being in tech isn’t easy, but you’ll be given access to world class resources, and state of the art facilities to learn and polish your craft.</p>
                    <Link className="mission--button" to="/">Apply Now</Link>
                </div>
            </section>
        </>
    )
}

export default Mission;