import React from 'react';
import './_styles.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardLayout = (props) => {
    return (
        <>
            <div className="card">
                <FontAwesomeIcon className="card__icon" icon={props.icon} />
                <h3 className="card__title">{props.title}</h3>
                <p className="card__content">{props.content}</p>
                <p className="card__label">Our Courses Include:</p>
                <ul className="card__list">
                    <li className="card__list--item">{props.itemOne}</li>
                    <li className="card__list--item">{props.itemTwo}</li>
                    <li className="card__list--item">{props.itemThree}</li>
                    <li className="card__list--item">{props.itemFour}</li>
                </ul>
                <Link onClick={() => window.scrollTo(0,0)} className="card--btn" to="/our-program">More Info</Link>
            </div>
        </>
    )
}

export default CardLayout;