import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/footer.scss';

class Footer extends Component {

    render() {
        return(
            <footer>
                <div id="footerContent">
                    <div id="footerAbout">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore dolore magna aliqua.</p>
                        <p>Made by <a href="/">Kiramy</a></p>
                    </div>
                    <div id="footerNews">
                        <h4>Newsletter</h4>
                        <p>Stay update with our latest</p>
                        <div id="footerInput">
                            <input type="email" placeholder="Enter Email"/>
                            <button><FontAwesomeIcon icon="arrow-right"/></button>
                        </div>
                    </div>
                    <div id="footerFollow">
                        <h4>Follow Us</h4>
                        <p>Let us be social</p>
                        <div id="footerSocial">
                            <div className="footerIcon"><FontAwesomeIcon icon={["fab","facebook-f"]} /></div>
                            <div className="footerIcon"><FontAwesomeIcon icon={["fab","twitter"]} /></div>
                            <div className="footerIcon"><FontAwesomeIcon icon={["fab","dribbble"]} /></div>
                            <div className="footerIcon"><FontAwesomeIcon icon={["fab","behance"]} /></div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;