import React from 'react';
import './App.css';
import TrafficInformation from './TrafficInformation';

class App extends React.Component {
    // Klassen Konstructor bekommt Attribute und Funktionen zugewiesen
    constructor(props) {
        super(props); 
        this.state = {
                        trafficInformations: [],
                        //trafficInformations: [{line: '2', destination: 'Ende', tuep: 'Bus', time: '11:02' }, {line: '5', destination: 'Ende', tuep: 'Bus', time: '11:02' }, {line: '11', destination: 'Ende', tuep: 'Bus', time: '11:02' }],
                        value: 'Alexanderplatz',
                        error: null,
                        isLoaded: false,
                        location: '',
                        locationID: '',
                        apiJSON: []
                     };
                         // .bind macht Funktion fuer Klasse global verfuegbar
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.callAPI_locationID = this.callAPI_locationID.bind(this);
        this.callAPI_departures = this.callAPI_departures.bind(this);
    }

    // Es folgen Definitionen der Funktionen, welche die Klasse bekommen hat
    handleSubmit(event) 
    {
        event.preventDefault();
        // hole Usereinagbe
        let userInput = this.state.value;
        
        let locationName = this.callAPI_locationID(userInput);
        this.callAPI_departures(locationName);
    }

    callAPI_locationID(stationName) 
    {
        this.setState({location: stationName});

        let baseURL = "https://v5.vbb.transport.rest/locations?query=";
        let fetchUrl = baseURL+stationName;

        fetch(fetchUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              locationID: result[0].id // Rufe stations ID ab
            });
            console.log(this.state.location, this.state.locationID );
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        return this.state.locationID;
    }

    callAPI_departures(locationID) 
    {
        // Informationen um api zu verwenden
        let BASEURL = 'https://v5.vbb.transport.rest/stops/';
        let defaultQueryKeys = 'departures?&remarks=false&includeRelatedStations=false&results=999';
        let fetchUrl = BASEURL + locationID + "/" + defaultQueryKeys;

        fetch(fetchUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              trafficInformations: result
            });
            console.log(this.state.trafficInformations);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }

    // Render bekommt Informationene ueber das Aussehen, wie Klasse aussehen soll
    render() {                                                                     // selbst gebautes props oder Alternativ "...item"
        var items = this.state.trafficInformations.map(item => < TrafficInformation line={item.direction} destination={item.destination} tuep={item.tuep} time={item.time} />);
        return (
            <div className="App">
                <div className="input">
                    <h2 className="highlight">Nahverkehr Auskunft für Berlin</h2>
                    <input 
                    type="text"
                    className="search-input" 
                    onChange={this.handleChange} 
                    value={this.state.value} 
                    placeholder="Name der Station"></input>
                    <button className="submit-button"
                    onClick={this.handleSubmit}>Suchen</button>
                </div>
                <h3 className="availableTraffic">Liste aller Verbindungen der Haltestelle: {this.state.value}</h3>
                { items } {/* Auflisten aller TrafficInformation items */}
            </div>
        );
    }
}

export default App;


/* 
Beispiel API-Abfrage

Benutze Insomnia als JSON-Abfrage Beispiel

        let BASEURL = 'https://api.themoviedb.org/3/movie/now_playing';
        let url = BASEURL+'?api_key='+APIKEY;
        let response = await fetch(url);
        let data = await response.json();
        this.setState( {movies: data.results} );

*/