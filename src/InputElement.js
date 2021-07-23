import React, { useState } from 'react';
import './InputElement.css';

// Komponente soll eingegebenen Text nach "Suchen" nehmen
class InputElement extends React.Component {
    // Klassen Konstructor bekommt Attribute und Funktionen zugewiesen
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Render bekommt Informationene ueber das Aussehen, wie Klasse aussehen soll
    render() {
        return (
            <div className="input">
                <h2 className="highlight">Nahverkehr Auskunft für Berlin</h2>
                <input 
                className="search-input" 
                onChange={this.handleInput} 
                value={this.state.text} 
                placeholder="Name der Station"></input>
                <button className="submit" 
                onClick={this.handleSubmit}>Suchen</button>
            </div>
        );
    }

    // Es folgen Definitionen der Funktionen, welche die Klasse bekommen hat
    handleInput(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) { 
        console.log(this.state.text);
    }

}


export default InputElement;