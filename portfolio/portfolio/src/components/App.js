import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';
import profile from '../assets/matt.jpg';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }


    render() {
        return (
            <div>
                <span className="profile">
                    <img src={profile} alt='profile' />
                </span>
                <h1>Hello!</h1>
                <p>My name is Matt.</p>
                <Title />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Detroit</p>
                            <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love volleyball.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;