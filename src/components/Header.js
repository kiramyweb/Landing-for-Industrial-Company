import React, {Component} from 'react';
import {header} from "../images";
import {Link} from 'react-scroll'
import "../styles/header.scss";

class Header extends Component {

    render() {

        let handler = this.props.contactHandler;
        let isContact = this.props.isContact;

        return (
            <header id="header">
                <div id="headerContent">
                    <img src={header.logo} alt="Industry"/>
                    {!isContact &&
                    <div id="headerButtons">
                        <ul>
                            <Link to="mainPage" smooth={true} offset={0}>
                                <li>Home</li>
                            </Link>
                            <Link to="ourFeatures" smooth={true} offset={0}>
                                <li>About</li>
                            </Link>
                            <Link to="marketSectors" smooth={true} offset={0}>
                                <li>Service</li>
                            </Link>
                            <Link to="projects" smooth={true} offset={0}>
                                <li>Projects</li>
                            </Link>
                        </ul>

                        <ul>
                            <a onClick={handler}>
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                    }

                    {isContact &&
                    <div id="headerButtons">
                        <ul>
                            <a>
                                <li onClick={handler}>
                                    Return
                                </li>
                            </a>
                        </ul>
                    </div>
                    }
                </div>

            </header>
        )
    }
}

export default Header;