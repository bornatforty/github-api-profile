import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './Main'
import './App.css'
//css styling has also been broken up among the components for ease of reading and to avoid calling styles that won't be used

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Route exact path="/" component={Main}/>
        </div>
      </Router> 
    ); //all components rendered on Main, which is imported here.
  }
}

export default App;