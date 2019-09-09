import React from 'react';
import './_TestimonialSection.scss';

import Testimonial from '../../layout/Testimonial/Testimonial';

const TestimonialSection = () => {
    return (
        <>
            <h2 className="testimonial__title">Our Stories:</h2>
            <Testimonial 
                url="/images/marilyn.jpg"
                name="Marilyn Romero"
                info="Sales Academy - Cohort 1"
                content='“Road to Hire has allowed me to be courageous enough to face the fears of failure, brave enough to push through, and confident enough to have my voice heard.”'
            />

            <Testimonial 
                url="/images/nancy.jpg"
                name="Nancy Hinojosa"
                info="Tech Academy - Cohort 3"
                content='“Road to Hire has impacted my life by equipping me with the skills needed to hold a software engineer career, which allowed me to be financially stable and purchase a house.”'
            />

            <Testimonial 
                url="/images/marquis.jpg"
                name="Marquis Mitchell"
                info="Tech Academy - Cohort 5"
                content='“From teaching me the necessary soft-skills to be successful and productive in life, to providing me with a place to come learn the fundamentals for my dream career; Road to Hire has really changed my life in ways that are sometimes hard to explain. I now am set up in my dream field with zero college debt and it’s all thanks to Road to Hire.”'
            />
        </>
    )
}

export default TestimonialSection;