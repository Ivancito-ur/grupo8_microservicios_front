import logo from './logo.svg';
import './App.css';
import './boostrap.css';
import React, { Component } from 'react';
import LandingPageComponent from './components/LandingPageComponent';
import FooterComponent from './components/FooterComponent';



class App extends Component{
  render(){
    return (
      <div className="App">
        <LandingPageComponent></LandingPageComponent>
      </div>
    );
  }
}

export default App;
