
import React from 'react';
import './_styles.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt , faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const AppFooter = () => {
    return (
    
    <> 
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__nav__list">
                    <li className="footer__nav--item"><Link onClick={() => window.scrollTo(0,0)} className="footer__nav--link" to="/">Home</Link></li>
                    <li className="footer__nav--item"><Link onClick={() => window.scrollTo(0,0)} className="footer__nav--link" to="/our-program">Our Program</Link></li>
                    <li className="footer__nav--item"><Link onClick={() => window.scrollTo(0,0)} className="footer__nav--link" to="/jcsu">JCSU</Link></li>
                    <li className="footer__nav--item"><Link onClick={() => window.scrollTo(0,0)} className="footer__nav--link" to="/FAQ">FAQ</Link></li>
                    <li className="footer__nav--item"><a className="footer__nav--link" rel="noopener noreferrer" target="_blank" href="https://static1.squarespace.com/static/59bff878e9bfdf14c20dc183/t/5cd47345e79c7035c0aab533/1557427014028/R2H+Privacy+Policy.pdf">Privacy Policy</a></li>
                    <li className="footer__nav--item"><a className="footer__nav--link" rel="noopener noreferrer" target="_blank" href="https://boards.greenhouse.io/road2hire/jobs/1830097?gh_src=ee07e9541">Apply</a></li>
                </ul>
            </nav>


            <nav className="footer__list">
                <div className="footer__info">
                    <p className="footer__info__icon footer__info__icon--divider"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(855) 502-4473</span></p>
                    <a className="footer__info__icon" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Road+to+Hire/@35.0061496,-80.8460336,15z/data=!4m5!3m4!1s0x0:0xf9d1a2173eb72d32!8m2!3d35.0061496!4d-80.8460336"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">1101 Red Ventures Dr, Fort Mill, SC 29707</span></a>
                </div>
            </nav>

            <div className="copyright">
                <p className="copyright__text">Copyright &copy; Road To Hire</p>
            </div>
        </footer>
    </>
    )
}

export default AppFooter;