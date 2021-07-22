import React from 'react';
import './InputElement.css';

class InputElement extends React.Component {
    render() {
        return (
            <div className="input">
                <input className="station-input" placeholder="Name der Station"></input>
                <button className="search-input">Suchen</button>
            </div>
        );
    }
}


export default InputElement;