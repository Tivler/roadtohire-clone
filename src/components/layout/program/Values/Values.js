import React from 'react';
import './_styles.scss';

import ValuesLayout from '../../../shared/ValuesLayout/ValuesLayout'

import { faChartLine, faHandHoldingHeart, faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";

const ValuesSection = () => {
    return (
        <section className="corevalues">
            <h2 className="corevalues__title">Our Four Core Values:</h2>
            <div className="valuecards">
                <ValuesLayout 
                    icon={faChartLine}
                    title="Invest In Yourself"
                    content="This is a once-in-a-lifetime opportunity. 
                    We’ve created a program that gives our students incredible access, 
                    exposure and opportunity. We ask that our students take advantage of 
                    every opportunity to learn, grow and stay uncomfortable. "
                />
                <ValuesLayout 
                    icon={faHandHoldingHeart}
                    title="Value Your Team"
                    content="Together we’re much better. We believe in creating relationships 
                    that will last long after our students graduate our program. Our expectation 
                    is that our students embrace diversity of thought and experience, learn with 
                    and from each other, and consistently strive to support and help one another. "
                />
                <ValuesLayout 
                    icon={faHandshake}
                    title="Leave It Better Than You Found It"
                    content="Leaving a legacy starts with the small things. We believe that every 
                    interaction we experience is an opportunity to make the world around us better. 
                    Our students and graduates should always look the part, act the part, and treat 
                    their physical environment as a reflection of their legacy."
                />
                <ValuesLayout 
                    icon={faTrophy}
                    title="Win The Right Way"
                    content="There’s the old adage “Ethics is knowing the difference between what you have 
                    a right to do and what is right to do.” One of the key elements of living a choice-filled 
                    life is understanding the virtue and value of making the right choices. We don’t believe in 
                    cutting corners. We don’t like drama. We want our students to make ethical decisions that benefit the greater good."
                />
            </div>
        </section>
    )
}

export default ValuesSection;