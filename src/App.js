
import ReactDOM from 'react-dom';
import './style.css';

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
