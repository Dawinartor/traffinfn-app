import React from 'react';
import './TrafficInformation.css';

class TrafficInformation extends React.Component {
    constructor(props) {
        super(props);
       // this.state = { line: '', destination: '', tuep: '', time: ''};
    }

    render() {
        return (
            <div className="information-board">
                {/* Linie */}
                <h4 className="line">Linie: {this.props.line} </h4> 
                {/* Verbindungsname */}
                <p className="destination-direction">Richtung: {this.props.destination} </p> 
                {/* Typ: Bahn oder Bus */}
                <p className="type">Typ der Verbindung: {this.props.tuep} </p>
                {/* Ankunftszeit */}
                <p className="time">Abfahrzeit: {this.props.time} </p>
            </div>
        );
    }
}

export default TrafficInformation;