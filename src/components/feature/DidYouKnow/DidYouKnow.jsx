
import React from 'react';
import './_DidYouKnow.scss';

import { Link } from 'react-router-dom';

const DidYouKnow = () => {
    return (
        <>
        <section className="DYK--wrapper"> 
            <div className="DYK">
                <Link className="DYK--link" rel="noopener noreferrer" to="/" target="_blank">
                    <div className="DYK--overlay">
                        <p className="DYK__title">DID YOU</p>
                        <p className="DYK__subtitle">KNOW?</p>
                    </div>
                </Link>

                <div className="DYK__content">
                    <h3 className="DYK__content__title">Interesting Facts</h3>
                    <p className="DYK__content__text">College costs have gone up 129% in the last 30 years; the average household income has only gone up 16%</p>
                    <p className="DYK__content__text">45% of recent college grads work in a “non-college job,” earning significantly less than the average job requiring a degree</p>
                    <p className="DYK__content__text">For high school graduates without a college degree annual earnings, on average, top out at $28,000</p>
                    <Link className="DYK__content__button" to="/your-career">More Info</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default DidYouKnow;