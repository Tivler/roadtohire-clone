import React from 'react';
import './_styles.scss';

const Content = () => {
    return (
        <>
        <section className="jcsucontent"> 
            <div className="jcsucontent--wrapper">
               <img className="jcsucontent__image" src="/images/JCSUpeople.jpg" alt="images"/>

                <div className="jcsucontent__content">
                    <h3 className="jcsucontent__content__title">Become a Digital Marketer</h3>
                    <p className="jcsucontent__content__info">Road to Hire and Red Ventures are proud to announce a Digital Marketing program that will be offered at JCSU. Successfully completing this program will provide you with the opportunity to build a career in digital marketing at Red Ventures.</p>
                    <p className="jcsucontent__content__info">The training course will include the below topics:</p>
                    <div className="jcsucontent--grid">
                        <ul className="jcsucontent__list">
                            <li className="jcsucontent__list--item">Search Engine Optimization (SEO)</li>
                            <li className="jcsucontent__list--item">Paid Search</li>
                            <li className="jcsucontent__list--item">Paid Social</li>
                            <li className="jcsucontent__list--item">Native Advertising</li>
                        </ul>
                        <ul className="jcsucontent__list"> 
                            <li className="jcsucontent__list--item">Display Remarketing</li>
                            <li className="jcsucontent__list--item">Basic Web Design</li>
                            <li className="jcsucontent__list--item">Websites and Browsers</li>
                            <li className="jcsucontent__list--item">Email Marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Content;