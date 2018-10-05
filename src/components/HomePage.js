import React, {Component} from 'react';
import "../styles/homePage.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import {mainPage} from "../images";
import Lightbox from 'react-image-lightbox';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import YouTube from 'react-youtube';
import Slider from 'react-slick';

const colourStyles = {
    control: styles => ({
        ...styles,
        borderRadius: 0,
        '&:hover': {borderColor: 'white'},
        border: '1px solid white',
        backgroundColor: 'transparent',
        color: 'white'
    }),
    valueContainer: styles => ({...styles, backgroundColor: 'transparent', color: 'white'}),
    dropdownIndicator: (styles, state) => ({
        ...styles, transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen && "rotate(180deg)",
        '&:hover': {color: 'white'},
        color: 'white'
    }),
    menu: styles => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        return {
            ...styles,
            backgroundColor: 'transparent',
            color: isFocused || isSelected ? 'orange' : 'gray',
            transition: '0.3s',
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    input: styles => ({...styles, backgroundColor: 'transparent', color: 'white'}),
    placeholder: styles => ({...styles, backgroundColor: 'transparent', color: 'white'}),
    singleValue: (styles, {data}) => ({...styles, backgroundColor: 'transparent', color: 'white'}),
};

let carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
};

const selectOptions = [
    {value: 'option1', label: 'Option one'},
    {value: 'option2', label: 'Option two'},
    {value: 'option3', label: 'Option three'}
];

const youtubeOpts = {
    width: 450,
    height: 300
};

class Count extends Component {
    render() {
        return (
            <CountUp
                start={this.props.start}
                end={this.props.end}
                duration={4}
                delay={0}
                decimal={this.props.decimal ? "." : ""}
                decimals={this.props.decimal ? 1 : 0}
                separator=" "
                suffix={this.props.suffix}
            >
                {({countUpRef},) => (
                    <p ref={countUpRef}/>
                )}
            </CountUp>
        )
    }
}

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };

        this.handleClickProject = this.handleClickProject.bind(this);
    }

    handleClickProject(id) {
        this.setState({
            photoIndex: id,
            isOpen: true
        })
    }

    render() {
        let projectsImg = mainPage.projects.map((el, index) => <img src={el}
                                                                    onClick={() => this.handleClickProject(index)}/>
        );

        const {photoIndex, isOpen} = this.state;
        const images = mainPage.projects;

        return (
            <div id="mainPage">
                <section id="topBanner">
                    <div id="topBannerInfo">
                        <h4>Don't look further, here is the key</h4>
                        <h1>We’re Industrial solution</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                            sed do eiusmod tempor incididunt.</p>
                        <button>Get Started</button>
                    </div>
                </section>

                <section id="ourFeatures">
                    <div>
                        <div className="feature">
                            <FontAwesomeIcon icon="magic"/>
                            <h4>Maintenance</h4>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                higher conduct standards especially in the workplace. That’s why.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon="rocket"/>
                            <h4>Residental Service</h4>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                higher conduct standards especially in the workplace. That’s why.</p>
                        </div>
                        <div className="feature">
                            <FontAwesomeIcon icon="bug"/>
                            <h4>Commercial Service</h4>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                higher conduct standards especially in the workplace. That’s why.</p>
                        </div>
                    </div>
                </section>

                <section id="quote">
                    <div id="quoteHolder">
                        <div id="quoteDesk">
                            <p>Brand new app to blow your mind</p>
                            <h3>We’ve made a life
                                that will change you</h3>
                            <p>We are here to listen from you deliver exellence</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit
                                amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim.</p>
                            <button>Get Started Now</button>
                        </div>

                        <div id="quoteFormHolder">
                            <form action="/">
                                <h3>Request a Quote</h3>
                                <Select styles={colourStyles}
                                        className="selectQuote"
                                        placeholder="Select Service"
                                        options={selectOptions}/>
                                <input className="quoteInput" type="text" placeholder="Name"/>
                                <input className="quoteInput" type="tel" placeholder="Phone Number"/>
                                <input className="quoteInput" type="email" placeholder="Email Address"/>
                                <textarea placeholder="Message"/>
                                <button type="submit">Request Free Quote</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section id="marketSectors">
                    <div className="sectionHeader">
                        <h3>Our Capturing Market Sectors</h3>
                        <p>Who are in extremely love with eco friendly system...</p>
                    </div>

                    <div id="marketFeatures">
                        <div>
                            <figure><img src={mainPage.marketSectors[0]} alt=""/></figure>
                            <div className="marketDesc">
                                <p>Automotive Engineering</p>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                    higher conduct women face higher conduct.</p>
                            </div>
                        </div>
                        <div>
                            <figure><img src={mainPage.marketSectors[1]} alt=""/></figure>
                            <div className="marketDesc">
                            <p>Construction & Engineering</p>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                higher conduct women face higher conduct.</p></div></div>
                        <div>
                            <figure><img src={mainPage.marketSectors[2]} alt=""/></figure>
                            <div className="marketDesc">
                            <p>Industrial Engineering</p>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face
                                higher conduct women face higher conduct.</p></div></div>
                    </div>
                </section>

                <section id="numbers">
                    <div id="facts">
                        <div id="fact1">
                            <div className="number">
                                <TrackVisibility once>
                                    {
                                        ({isVisible}) => isVisible
                                            ?
                                            <Count decimal={false}
                                                   suffix="K+"
                                                   start={0} end={2}/>
                                            :
                                            <p>0</p>
                                    }
                                </TrackVisibility>
                            </div>
                            <p>Projects Completed</p>
                        </div>
                        <div id="fact2">
                            <div className="number">
                                <TrackVisibility once>
                                    {
                                        ({isVisible}) => isVisible
                                            ?
                                            <Count decimal={true}
                                                   suffix="K"
                                                   start={1} end={5.5}/>
                                            :
                                            <p>1K</p>
                                    }
                                </TrackVisibility>
                            </div>
                            <p>Total Employees</p>
                        </div>
                        <div id="fact3">
                            <div className="number">
                                <TrackVisibility once>
                                    {
                                        ({isVisible}) => isVisible
                                            ?
                                            <Count decimal={false}
                                                   start={300} end={959}/>
                                            :
                                            <p>300</p>
                                    }
                                </TrackVisibility>
                            </div>
                            <p>Happy Clients</p>
                        </div>
                        <div id="fact4">
                            <div className="number">
                                <TrackVisibility once>
                                    {
                                        ({isVisible}) => isVisible
                                            ?
                                            <Count decimal={false}
                                                   start={50} end={367}/>
                                            :
                                            <p>50</p>
                                    }
                                </TrackVisibility>
                            </div>
                            <p>Tickets Submited</p>
                        </div>
                    </div>

                </section>

                <section id="projects">
                    <div className="sectionHeader">
                        <h3>Latest Finished Projects</h3>
                        <p>Who are in extremely love with eco friendly system...</p>
                    </div>

                    <div id="projectsDivs">
                        {projectsImg}

                    </div>
                </section>

                <section id="feedback">
                    <div className="sectionHeader">
                        <h3>Enjoy our Client’s Feedback</h3>
                        <p>Who are in extremely love with eco friendly system...</p>
                    </div>

                    <div id="feedbackContent">
                        <div id="videoHolder">
                            <YouTube
                                opts={youtubeOpts}
                                videoId="ARA0AxrnHdM"
                            />
                        </div>
                        <div id="reviews">
                            <Slider {...carouselSettings}>
                                <div className="review">
                                    <div className="reviewHead">
                                        <p>Fannie Rowe</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star"/></li>
                                            <li><FontAwesomeIcon icon="star"/></li>
                                        </ul>
                                    </div>
                                    <div className="reviewContent">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
                                            massa pharetra lacus blandit cursus. Vestibulum feugiat imperdiet pharetra.
                                            Proin elementum commodo lorem, eget rhoncus augue eleifend vitae. Curabitur
                                            ut velit tortor.</p>
                                    </div>
                                </div>
                                <div className="review">
                                    <div className="reviewHead">
                                        <p>Fannie Rowe</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star"/></li>
                                        </ul>
                                    </div>
                                    <div className="reviewContent">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
                                            massa pharetra lacus blandit cursus. Vestibulum feugiat imperdiet pharetra.
                                            Proin elementum commodo lorem, eget rhoncus augue eleifend vitae. Curabitur
                                            ut velit tortor.</p>
                                    </div>
                                </div>
                                <div className="review">
                                    <div className="reviewHead">
                                        <p>Fannie Rowe</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                            <li><FontAwesomeIcon icon="star" className="checked"/></li>
                                        </ul>
                                    </div>
                                    <div className="reviewContent">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
                                            massa pharetra lacus blandit cursus. Vestibulum feugiat imperdiet pharetra.
                                            Proin elementum commodo lorem, eget rhoncus augue eleifend vitae. Curabitur
                                            ut velit tortor.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>

                <section id="blogPosts">
                    <div className="sectionHeader">
                        <h3>Latest Posts From Our Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>

                    <div id="posts">
                        <div className="post">
                            <div className="postHead">
                                <div className="postImage"><img src={mainPage.blog[0]} alt=""/></div>

                                <div className="postHeadInfo">
                                    <div className="postAuthor">
                                        <img src={mainPage.blog[3]} alt=""/>
                                        <p>Mark Wiens</p>
                                    </div>

                                    <div className="postDate">
                                        <p>13th Dec</p>
                                        <p><FontAwesomeIcon icon={["far", "heart"]}/>15</p>
                                        <p><FontAwesomeIcon icon={["far", "comment"]}/>04</p>
                                    </div>
                                </div>
                                <div className="postLine">&nbsp;</div>
                            </div>
                            <div className="postContent">
                                <h3>PORTABLE FASHION FOR YOUNG WOMEN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip exea.</p>
                            </div>
                        </div>

                        <div className="post">
                            <div className="postHead">
                                <div className="postImage"><img src={mainPage.blog[1]} alt=""/></div>
                                <div className="postHeadInfo">
                                    <div className="postAuthor">
                                        <img src={mainPage.blog[3]} alt=""/>
                                        <p>Mark Wiens</p>
                                    </div>

                                    <div className="postDate">
                                        <p>13th Dec</p>
                                        <p><FontAwesomeIcon icon={["far", "heart"]}/>15</p>
                                        <p><FontAwesomeIcon icon={["far", "comment"]}/>04</p>
                                    </div>
                                </div>
                                <div className="postLine">&nbsp;</div>
                            </div>
                            <div className="postContent">
                                <h3>PORTABLE FASHION FOR YOUNG WOMEN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip exea.</p>
                            </div>
                        </div>

                        <div className="post">
                            <div className="postHead">
                                <div className="postImage"><img src={mainPage.blog[2]} alt=""/></div>
                                <div className="postHeadInfo">
                                    <div className="postAuthor">
                                        <img src={mainPage.blog[3]} alt=""/>
                                        <p>Mark Wiens</p>
                                    </div>

                                    <div className="postDate">
                                        <p>13th Dec</p>
                                        <p><FontAwesomeIcon icon={["far", "heart"]}/>15</p>
                                        <p><FontAwesomeIcon icon={["far", "comment"]}/>04</p>
                                    </div>
                                </div>
                                <div className="postLine">&nbsp;</div>
                            </div>
                            <div className="postContent">
                                <h3>PORTABLE FASHION FOR YOUNG WOMEN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip exea.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })}
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })}
                    />
                )}
            </div>
        )
    }
}

export default HomePage;