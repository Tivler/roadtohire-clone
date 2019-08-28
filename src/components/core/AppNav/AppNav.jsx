import React from 'react';
import './_AppNav.scss';

const AppNav = () => {
    return (

    <nav className="nav">

        <input type="checkbox" id="nav" className="nav--hidden"></input>
        <div className="nav__menu--wrapper">
            <label htmlFor="nav" className="nav__menu--button">
                <i></i>
                <i></i>
                <i></i> 
            </label>
        </div>

        <div className="nav__logo--wrapper">
            <img className="nav__logo" src="images/roadtohirelogo-white.png" alt=""/>
        </div>

        <div className="nav__list--wrapper">
            <ul className="nav__list__ul">
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href>Home</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href>Your Career</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href>Core Values</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href>Our Stories</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href>Apply</a></li>
            </ul>
        </div>

    </nav>

    )
}

export default AppNav;