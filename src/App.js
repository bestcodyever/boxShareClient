import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import logo from './images/logo.png'
import { Route } from 'react-router-dom'
import mapComponent from './components/mapComponent'
import login from './components/login'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header logo={logo}/>
        <Route path="/login" component={login}/>
        <div className="routeDiv">
          <Route exact path="/" component={mapComponent}/>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
