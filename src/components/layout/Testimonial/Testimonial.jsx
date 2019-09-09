import React from 'react';
import './_Testimonial.scss';

const Testimonial = (props) => {
    return (
        <>
        <h2 className="testimonial__title">Our Stories:</h2>
        <section className="testimonial"> 
            <div className="testimonial--wrapper">
               <img className="testimonial__image" src={props.url} alt="images"/>

                <div className="testimonial__content">
                    <h3 className="testimonial__content__title">{props.name}</h3>
                    <p className="testimonial__content__info">{props.info}</p>
                    <p className="testimonial__content__text">{props.content}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial;