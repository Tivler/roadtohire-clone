import React from 'react';
import './_JCSUinfo.scss';

import Values from '../../layout/Values/Values';

import { faChartLine, faHandHoldingHeart, faHandshake, faTrophy } from "@fortawesome/free-solid-svg-icons";

const JCSUinfo = () => {
    return (
        <section className="jcsuinfo">
            <h2 className="jcsuinfo__title">About Our Program:</h2>
            <div className="jcsucards">
                <Values 
                    icon={faChartLine}
                    title="Register"
                    content="Join the Digital Marketing program by registering for the Business 490 course at JCSU."
                />
                <Values 
                    icon={faHandHoldingHeart}
                    title="Train"
                    content="Attend weekly training sessions at JCSU for the Fall 2019 semester (3 credit hours) and learn professional development and digital business skills."
                />
                <Values 
                    icon={faHandshake}
                    title="Immerse"
                    content="Participate in a Spring 2020 (3 credit hours) immersive training course at JCSU and Red Ventures."
                />
                <Values 
                    icon={faTrophy}
                    title="Lead"
                    content="Start your career as a Digital Marketing Associate at Red Ventures."
                />
            </div>
        </section>
    )
}

export default JCSUinfo;