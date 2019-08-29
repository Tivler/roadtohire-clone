import React from 'react';
import './_Impact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faHandsHelping, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const Impact = () => {
    return (
        <>
        <section className="impact">
            <h3>Hear from our alumni how Road to Hire has impacted their lives.</h3>

            <div className="wrap">
                <p className="icon">
                    <FontAwesomeIcon className="icon--size" icon={faChalkboardTeacher} />
                    <span className="label">GET TRAINED</span>
                </p>

                <p className="icon divid">
                    <FontAwesomeIcon className="icon--size" icon={faHandsHelping} />
                    <span className="label">GET PAID</span>
                </p>

                <p className="icon">
                    <FontAwesomeIcon className="icon--size" icon={faDoorOpen} />
                    <span className="label">OPEN DOORS</span>
                </p>
            </div>
        </section>
        </>
    )
}

export default Impact;