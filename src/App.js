import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import logo from './images/logo.png'
import { Route } from 'react-router-dom'
import login from './components/login'
import mainView from './components/mainView'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header logo={logo}/>
        <Route path="/login" component={login}/>
          <Route exact path="/" component={mainView}/>
        <Footer/>

      </div>
    );
  }
}

export default App;
