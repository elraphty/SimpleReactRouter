import React, { Component } from 'react';
import {BrowserRouter as Router,
  Route,
} from  'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Homepage from './components/Homepage';
//import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
      <div className="App">
      <Header/>

      <Route exact path="/body" component={Body} />
      <Route exact path="/"  component={Homepage} />
      </div>

      </Router>
    );
  }
}

export default App;
