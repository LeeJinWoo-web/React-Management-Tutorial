import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="gray-background">
         <img src={logo} alt="logo"/>
        Hello React
      </div>
    );
  }
}

export default App;
