import React from 'react';
import './_styles.scss';

import { NavLink , Link } from 'react-router-dom';

class AppNav extends React.Component {
    
    checked() {
        if (document.querySelector("#nav").checked === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

    componentDidMount() {
        document.body.style.overflow = 'visible';
    }

    
    render () {
        return (

        <nav className="nav">

            <input type="checkbox" id="nav" className="nav--hidden" onClick={this.checked}></input>
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
                    <li className="nav__list--item"><NavLink className="nav__list--link" to="/our-program">Our Program</NavLink></li>
                    <li className="nav__list--item"><NavLink className="nav__list--link" to="/jcsu">JCSU</NavLink></li>
                    <li className="nav__list--item"><NavLink className="nav__list--link" to="/FAQ">FAQ</NavLink></li>
                </ul>
            </div>

        </nav>

        )
    }
}

export default AppNav;