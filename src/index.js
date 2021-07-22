import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root") 
    // Wo ist dieses Element zufinden?
        // Durch ReactDOM wird ein DOM global erreichbar
);
