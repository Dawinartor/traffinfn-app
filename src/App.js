import React from 'react';
import './App.css';
import TrafficInformation from './TrafficInformation';

class App extends React.Component {
    // Klassen Konstructor bekommt Attribute und Funktionen zugewiesen
    constructor(props) {
        super(props); 
        this.state = {
                        trafficInformations: [{line: '2', destination: 'Ende', tuep: 'Bus', time: '11:02' }, {line: '5', destination: 'Ende', tuep: 'Bus', time: '11:02' }, {line: '11', destination: 'Ende', tuep: 'Bus', time: '11:02' }],
                        value: 'Alexanderplatz',
                        error: null,
                        isLoaded: false,
                        apiJSON: []
                     };
                         // .bind macht Funktion fuer Klasse global verfuegbar
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.apiCall = this.apiCall.bind(this);
    }

    // Es folgen Definitionen der Funktionen, welche die Klasse bekommen hat
    handleSubmit(event) 
    {
        event.preventDefault();
        // hole Usereinagbe
        let queryKey = this.state.value;
        // hole api Informationen   
        //this.setState({trafficInformations: this.apiCall(queryKey)});
        //console.log(this.state.value);
        this.apiCall(queryKey);
    }

    apiCall(queryKey) 
    {
        // Informationen um api zu verwenden
        let BASEURL = 'https://v5.vbb.transport.rest/locations?poi=false&addresses=false&query=';
        let fetchUrl = BASEURL+queryKey;

        fetch(fetchUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              apiJSON: result
            });
            console.log(this.state.apiJSON);
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
        var items = this.state.trafficInformations.map(item => < TrafficInformation line={item.line} destination={item.destination} tuep={item.tuep} time={item.time} />);
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