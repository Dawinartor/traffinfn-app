import React from 'react';
import './App.css';
import TrafficInformation from './TrafficInformation';


class App extends React.Component {
    // Klassen Konstructor bekommt Attribute und Funktionen zugewiesen
    constructor(props) {
        super(props); 
        this.state = {
                        trafficInformations: [],
                        inputString: ''
                     };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Render bekommt Informationene ueber das Aussehen, wie Klasse aussehen soll
    render() {                                                                     // selbst gebautes props oder Alternativ "...item"
        var items = this.state.trafficInformations.map(item => < TrafficInformation linie={item.line} destination={item.destination} tuep={item.tuep} time={item.time} />);
        return (
            <div className="App">
                <div className="input">
                    <h2 className="highlight">Nahverkehr Auskunft für Berlin</h2>
                    <input 
                    className="search-input" 
                    onChange={this.handleInput} 
                    value={this.state.inputString} 
                    placeholder="Name der Station"></input>
                    <button className="submit"
                    onClick={this.handleSubmit}>Suchen</button>
                </div>
                <h3 className="availableTraffic">Liste aller Verbindungen</h3>
                { items } {/* Auflisten aller TrafficInformation items */}
            </div>
        );
    }

    // Es folgen Definitionen der Funktionen, welche die Klasse bekommen hat
    handleInput(event) 
    {
        // uebergebe Usereingabe an Attribut inputString
        this.setState({inputString: event.target.inputString});
        //console.log(this.state.inputString);
    }

    handleSubmit(event) 
    {
        // hole Usereinagbe
        let queryKey = this.state.inputString;
        // hole api Informationen   
        this.setState({trafficInformations: this.apiCall(queryKey)});
    }

    apiCall(queryKey) 
    {
        let BASEURL = 'https://v5.vbb.transport.rest/locations?poi=false&addresses=false&query=';
        let fetchUrl = BASEURL+queryKey;
        console.log(fetch(fetchUrl));
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