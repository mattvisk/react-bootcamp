import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

class Instructions extends Component {
    render() {
        console.log('Instructions (this)', this)
        return (
            !this.props.gameStarted ? (
                <div> 
                    {
                        this.props.instructionsExpanded ? (
                            <div>
                                <p style={{maxWidth:500, margin:'20px auto'}}>
                                    Welcome to evens or odds. The game goes like this. The deck is shuffled. Then choose: will the next card be even or odd? Make a choice on every draw, and see how many you get right! (Face cards don't count)
                                </p>
                                <button onClick={this.props.collapseInstructions}>Hide Instructions</button>
                            </div>
                        ) : (
                            <button onClick={this.props.expandInstructions}>View Instructions</button>
                        )
                    }
                </div>
            ) : null
        );
    }
}



const mapStateToProps = state => {
    return { 
        instructionsExpanded: state.instructionsExpanded,
        gameStarted: state.gameStarted 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);