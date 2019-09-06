import React from 'react';
import './_Nav.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
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
                <li className="nav__list--item"><Link className="nav__list--link" to="/">Home</Link></li>
                <li className="nav__list--item"><NavLink className="nav__list--link" to="/your-career">Our Program</NavLink></li>
                <li className="nav__list--item"><NavLink className="nav__list--link" to="/ourstories">Our Stories</NavLink></li>
                <li className="nav__list--item"><NavLink className="nav__list--link" to="/corevalues">Core Values</NavLink></li>
                <li className="nav__list--item"><NavLink className="nav__list--link" to="/apply">Apply</NavLink></li>

                <li className="nav__list--item hidden"><Link className="nav__list--link nav--highlight" to="/JCSU">JCSU</Link></li>
                <li className="nav__list--item hidden"><Link className="nav__list--link nav--highlight" to="/FAQ">FAQ</Link></li>
               
            </ul>

            <ul className="nav__extra">
                <li className="nav__extra--item"><Link className="nav__extra--link nav--highlight" to="/JCSU">JCSU</Link></li>
                <li className="nav__extra--item"><Link className="nav__extra--link nav--highlight" to="/FAQ">FAQ</Link></li>
            </ul>
        </div>

    </nav>

    )
}

export default Nav;