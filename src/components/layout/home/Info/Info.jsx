import React from 'react';
import './_styles.scss';

import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <>
        <section className="info"> 
            <div className="info--wrapper">
                <Link className="info__card" rel="noopener noreferrer" to="/our-program">
                    <div className="info__card--overlay">
                        <p className="info__card__title">DID YOU</p>
                        <p className="info__card__subtitle">KNOW?</p>
                    </div>
                </Link>

                <div className="info__content">
                    <h3 className="info__content__title">Interesting Facts</h3>
                    <p className="info__content__text">College costs have gone up 129% in the last 30 years; the average household income has only gone up 16%</p>
                    <p className="info__content__text">45% of recent college grads work in a “non-college job,” earning significantly less than the average job requiring a degree</p>
                    <p className="info__content__text">For high school graduates without a college degree annual earnings, on average, top out at $28,000</p>
                    <p className="info__content__text">70 percent of Americans will study at a four-year college but less than two-thirds will graduate with a degree.</p>
                    <p className="info__content__text">The average student debt is $38,390. The median student debt is between $10,000 and $25,000, while 2% of borrowers owe $100,000 or more.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Info;