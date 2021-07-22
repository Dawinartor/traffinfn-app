import React from 'react';
import './trafficInformation.css';

class TrafficInformation extends React.Component {
    render() {
        return (
            <div className="information-board">
                /* Linie */
                <h4 className="line"></h4> 
                /* Verbindungsname */
                <p className="destination-direction"></p> 
                /* Typ: S-Bahn oder Bus */
                <p className="type"></p>
                /* Ankunftszeit */
                <p className="time"></p>
            </div>
        );
    }
}