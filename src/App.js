import React from 'react';
import './App.css';
import TrafficInformation from './TrafficInformation';
import InputElement from './InputElement';


class App extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {trafficInformations: [{linie: 1, destination: 'bla', tuep: 'Bus', time: '10:23'},{linie: 2, destination: 'bla', tuep: 'Bus', time: '10:23'},{linie: 3, destination: 'bla', tuep: 'Bus', time: '10:23'}]};
     //   this.apiCall = 
    }


    render() {                                                                     // selbst gebautes props oder Alternativ "...item"
        var items = this.state.trafficInformations.map(item => < TrafficInformation linie={item.linie} destination={item.destination} tuep={item.tuep} time={item.time} />);
        return (
            <div className="App">
                <InputElement />
                <h3 className="availableTraffic">Liste aller Verbindungen</h3>
                { items } {/* Auflisten aller items */}
            </div>
        );
    }
}

export default App;


/* 
Beispiel API-Abfrage

Benutze Insomnia als JSON-Abfrage Beispiel

let APIKEY = 'bd33c3a01995acdee5ef182ddf0e2052';
        let BASEURL = 'https://api.themoviedb.org/3/movie/now_playing';
        let url = BASEURL+'?api_key='+APIKEY;
        let response = await fetch(url);
        let data = await response.json();
        this.setState( {movies: data.results} );

*/