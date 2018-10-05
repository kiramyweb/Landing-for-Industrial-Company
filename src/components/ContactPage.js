import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "../styles/contactPage.scss";

class ContactPage extends Component {

    render() {
        return (
            <section id="contactPage">
                <div id="contactTop">
                    <h2>Contact Us</h2>
                </div>

                <div id="contactContent">
                    <div id="map">
                        <Map google={this.props.google} zoom={14}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'}/>
                            <InfoWindow onClose={this.onInfoWindowClose}/>
                        </Map>
                    </div>
                    <div id="contactInfo">
                        <div id="mainInfo">
                            <div className="infoHolder">
                                <div className="infoIcon">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                </div>
                                <div className="infoContent">
                                    <p>Dhaka, Bangladesh</p>
                                    <p>56/8, West Panthapath</p>
                                </div>
                            </div>
                            <div className="infoHolder">
                                <div className="infoIcon">
                                    <FontAwesomeIcon icon="mobile"/>
                                </div>
                                <div className="infoContent">
                                    <p>00 (880) 9865 562</p>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="infoHolder">
                                <div className="infoIcon">
                                    <FontAwesomeIcon icon="envelope"/>
                                </div>
                                <div className="infoContent">
                                    <p>support@codethemes.com</p>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>

                        <div id="contactForm">
                            <form>
                                <div id="contactFormInputs">
                                    <input type="text" placeholder="Enter your name"/>
                                    <input type="email" placeholder="Enter email adress"/>
                                    <input type="text" placeholder="Enter your subject"/>
                                </div>
                                <div id="contactTextArea">
                                    <textarea placeholder="Message"/>
                                </div>
                            </form>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBz9K2biJWV8HgL8aTsICdt8GQxF-4fqK4')
})(ContactPage);