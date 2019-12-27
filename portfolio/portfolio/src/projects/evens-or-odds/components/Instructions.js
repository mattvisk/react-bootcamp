import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

// stateless component (not modifying state, so don't need class component)
const Instructions = props => {
    const { instructionsExpanded } = props;

    if (instructionsExpanded) {
        return (
            <div>
                <p style={{maxWidth:500, margin:'20px auto'}}>
                    Welcome to evens or odds. The game goes like this. The deck is shuffled. Then choose: will the next card be even or odd? Make a choice on every draw, and see how many you get right! (Face cards don't count)
                </p>
                <button onClick={props.collapseInstructions}>Hide Instructions</button>
            </div>
        )
    }
    return (
        <div>
            <button onClick={props.expandInstructions}>View Instructions</button>
        </div>
    )
}


// const mapStateToProps = state => {
//     return { 
//         instructionsExpanded: state.instructionsExpanded
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         expandInstructions: () => dispatch(expandInstructions()),
//         collapseInstructions: () => dispatch(collapseInstructions())
//     };
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps);

// export default componentConnector(Instructions);


export default connect(
    state => ({ instructionsExpanded: state.settings.instructionsExpanded }), 
    { expandInstructions, collapseInstructions }
)(Instructions);