import React, { Component } from 'react';


const Joke = ({joke: { setup, punchline }}) => (
 <p style={{margin: '20px 0'}}>{setup} <em>{punchline}</em></p>
)


class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));
    }

    render() { 
        return (
            <div>
                <Joke joke={this.state.joke} />
                {this.state.jokes.map(joke => ( <Joke key={joke.id} joke={joke} /> ))}
                <a onClick={this.fetchJokes}>Read More</a>
            </div>
        )
    }

}

export default Jokes;