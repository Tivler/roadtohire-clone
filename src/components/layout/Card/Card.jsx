import React from 'react';
import './_Card.scss';

import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div class="card">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__content">{props.content}</p>
                <Link className="card--btn" to="/">More Info</Link>
            </div>
        </>
    )
}

export default Card;