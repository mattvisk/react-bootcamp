import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
    return (
        <div>
            <h3>Will it be even or odd?</h3>
            <div>
                <button
                    onClick={setGuessEven}
                    style={guess === 'even' ? { border: '2px solid #0c9' } : null }
                >Even</button>
                {' '}
                <button 
                    style={guess === 'odd' ? { border: '2px solid #0c9' } : null }
                    onClick={setGuessOdd}
                >Odd</button>
            </div>
        </div>
    )
}

export default connect(
    ({gameState: { guess }}) => ({ guess }),
    { setGuessEven, setGuessOdd }
)(Guess);