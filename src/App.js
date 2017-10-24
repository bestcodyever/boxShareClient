import React, { Component } from 'react';
import './App.css';
import MapView from './components/mapComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br></br>

          <h1 className="App-title">Welcome to bxShr</h1>
        </header>
        <p className="App-intro">
          <div className="map">
          <MapView />
          </div>
        </p>
        <footer className="App-footer">

        </footer>
      </div>
    );
  }
}

export default App;
