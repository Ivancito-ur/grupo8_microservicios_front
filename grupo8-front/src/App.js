import logo from './logo.svg';
import './App.css';
import './boostrap.css';
import React, { Component } from 'react';
import LandingPageComponent from './components/landingpage/LandingPageComponent.jsx';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/landingpage/LoginComponent.jsx';
import DashboardComponent from './components/dahsboard/DashboardComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/dashboard" component={DashboardComponent}></Route>
            <Route path="/" component={LandingPageComponent}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
