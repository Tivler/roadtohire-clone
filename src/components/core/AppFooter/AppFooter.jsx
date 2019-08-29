import React from 'react';
import './_AppFooter.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

    library.add(fab);

const Footer = () => {
    return (
    
    <> 
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__nav__list">
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/">Home</Link></li>
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/your-career">Your Career</Link></li>
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/corevalues">Core Values</Link></li>
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/FAQ">FAQ</Link></li>
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/apply">Apply</Link></li>
                    <li className="footer__nav--item"><Link className="footer__nav--link" to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </nav>


            <nav className="footer__list">
                <div className="footer__info">
                    <a className="footer__info__icon footer__info__icon--divider" href="https://www.roadtohire.org/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(855) 502-4473</span></a>
                    <a className="footer__info__icon" href="https://www.roadtohire.org/"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">1101 Red Ventures Dr, Fort Mill, SC 29707</span></a>
                </div>
            </nav>

            <div className="copyright">
                <p className="copyright__text">Copyright &copy; Road To Hire</p>
                <p className="copyright__updated">Last updated: August 2019</p>
            </div>
        </footer>
    </>
    )
}
export default Footer;
