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
                <h4 className="id">Linie: {this.props.id} </h4> 
                {/* Verbindungsname */}
                <p className="destination-direction">Richtung: {this.props.destination} </p> 
                {/* Typ: Bahn oder Bus */}
                <p className="type">Typ der Verbindung: {this.props.tuep} </p>
                
                <p className="spacer"></p>
                {/* Abfahrzeit */}
                <p className="time">Abfahrzeit: {this.props.time} </p>
                {/* Gleis */}
                <p className="platform">Gleis: {this.props.platform} </p>
            </div>
        );
    }
}

export default TrafficInformation;