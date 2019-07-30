import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Sample from './sample';

const App = () => {
  return (
    <div className="App">
      <header className="App-header" >
      <Sample />
      </header>
    </div>
  );
}

export default hot(module) (App);


