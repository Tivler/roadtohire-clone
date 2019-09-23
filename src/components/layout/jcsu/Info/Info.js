import React from 'react';
import './_styles.scss';

import ValuesLayout from '../../../shared/ValuesLayout/ValuesLayout';

import { faChartLine, faHandHoldingHeart, faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";

const JCSUinfo = () => {
    return (
        <section className="jcsuinfo">
            <img className="jcsuinfo__logo" src="/images/RTHxJCSU.png" alt="Road To Hire | JCSU Logo"/>
            <div className="jcsucards">
                <ValuesLayout 
                    icon={faChartLine}
                    title="Register"
                    content="Join the Digital Marketing program by registering for the Business 490 course at JCSU."
                />
                <ValuesLayout 
                    icon={faHandHoldingHeart}
                    title="Train"
                    content="Attend weekly training sessions at JCSU for the Fall 2019 semester (3 credit hours) and learn professional development and digital business skills."
                />
                <ValuesLayout 
                    icon={faHandshake}
                    title="Immerse"
                    content="Participate in a Spring 2020 (3 credit hours) immersive training course at JCSU and Red Ventures."
                />
                <ValuesLayout 
                    icon={faTrophy}
                    title="Lead"
                    content="Start your career as a Digital Marketing Associate at Red Ventures."
                />
            </div>
        </section>
    )
}

export default JCSUinfo;