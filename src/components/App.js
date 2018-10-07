import React, {Component} from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import ContactPage from "./ContactPage";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isContact: false
        };

        this.handleContactClick = this.handleContactClick.bind(this);
    }

    handleContactClick() {
        this.setState({
            isContact: !this.state.isContact
        });
    }

    render() {
        return (
            <main>
                <Header contactHandler={this.handleContactClick}
                        isContact={this.state.isContact} />
                {this.state.isContact ? <ContactPage/> : <HomePage/>}
                <Footer/>
            </main>
        )
    }
}

export default App;