import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1> Hello Mr. {props.name} </h1>
      <h1>Time is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
