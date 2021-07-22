import React from 'react';
import TrafficInformation from './TrafficInformation'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <input className="station-input"></input>
                <TrafficInformation />
            </div>
        );
    }
}

export default App;