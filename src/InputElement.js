import React from 'react';
import './InputElement.css';

class InputElement extends React.Component {
    render() {
        return (
            <div className="input">
                <input className="search-input" placeholder="Name der Station"></input>
                <button className="button-input">Suchen</button>
            </div>
        );
    }
}


export default InputElement;