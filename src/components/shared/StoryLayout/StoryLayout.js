import React from 'react';
import './_styles.scss';

const StoryLayout = (props) => {
    return (
        <>
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

export default StoryLayout;