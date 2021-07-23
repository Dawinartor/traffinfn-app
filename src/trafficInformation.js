import React from 'react';
import './TrafficInformation.css';

class TrafficInformation extends React.Component {

    render() {
        return (
            <div className="information-board">
                {/* Linie */}
                <h4 className="line">Linie: </h4> 
                {/* Verbindungsname */}
                <p className="destination-direction">Richtung: </p> 
                {/* Typ: Bahn oder Bus */}
                <p className="type">Typ der Verbindung: </p>
                {/* Ankunftszeit */}
                <p className="time">Abfahrzeit: </p>
            </div>
        );
    }
}

export default TrafficInformation;