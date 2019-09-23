import React from 'react';
import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValuesLayout = (props) => {
    return (
        <>
            <div className="values">
                <FontAwesomeIcon className="values__icon" icon={props.icon} />
                <h3 className="values__title">{props.title}</h3>
                <p className="values__content">{props.content}</p>
            </div>
        </>
    )
}

export default ValuesLayout;