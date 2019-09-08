import React from 'react';
import './_Hero.scss';

const Hero = (props) => {
    return (
        <>
            <section className="hero">
                <div className="hero--wrapper">
                        <h2 className="hero__title">{props.title}</h2>
                        <p className="hero__quote">{props.quote}</p>
                        <p className="hero__author">{props.author}</p>
                </div>
            </section>
        </>
    )
}

export default Hero;