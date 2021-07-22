import React from 'react';
import './App.css';
import TrafficInformation from './TrafficInformation';
import InputElement from './InputElement';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <InputElement />
                <TrafficInformation />
            </div>
        );
    }
}

export default App;