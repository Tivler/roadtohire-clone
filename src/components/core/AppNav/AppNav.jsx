import React from 'react';
import './_AppNav.scss';

const AppNav = () => {
    return (

    <nav className="nav">

        <input type="checkbox" id="nav" className="nav--hidden"></input>
        <div className="nav__menu">
            <label htmlFor="nav" className="nav__menu--button">
                <i className="nav__menu--icon"></i>
                <i className="nav__menu--icon"></i>
                <i className="nav__menu--icon"></i> 
            </label>
            <img className="nav__menu__logo" src="images/roadtohirelogo-white.png" alt="Road To Hire Logo"/>
        </div>

        <img className="nav__logo" src="images/roadtohirelogo-white.png" alt="Road To Hire Logo"/>

        <div className="nav__list">
            <ul className="nav__list--wrapper">
                <li className="nav__list--item"><a className="nav__list--link" href="https://www.roadtohire.org/">Home</a></li>
                <li className="nav__list--item"><a className="nav__list--link" href="https://www.roadtohire.org/">Your Career</a></li>
                <li className="nav__list--item"><a className="nav__list--link" href="https://www.roadtohire.org/">Core Values</a></li>
                <li className="nav__list--item"><a className="nav__list--link" href="https://www.roadtohire.org/">Our Stories</a></li>
                <li className="nav__list--item"><a className="nav__list--link" href="https://www.roadtohire.org/">Apply</a></li>

                <li className="nav__list--item hidden"><a className="nav__list--link nav--highlight" href="https://www.roadtohire.org/">JCSU</a></li>
                <li className="nav__list--item hidden"><a className="nav__list--link nav--highlight" href="https://www.roadtohire.org/">FAQ</a></li>
               
            </ul>

            <ul className="nav__extra">
                <li className="nav__extra--item"><a className="nav__extra--link nav--highlight" href="https://www.roadtohire.org/">JCSU</a></li>
                <li className="nav__extra--item"><a className="nav__extra--link nav--highlight" href="https://www.roadtohire.org/">FAQ</a></li>
            </ul>
        </div>

    </nav>

    )
}

export default AppNav;