import React from 'react';
import './InputElement.css';

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    handleInput(e) { // e steht fuere Event
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="input">
                <input className="search-input" placeholder="Name der Station"></input>
                <button className="button-input" onClick={this.handleInput}>Suchen</button>
            </div>
        );
    }
}


export default InputElement;