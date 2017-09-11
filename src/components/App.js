import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import '../styles/App.css';

//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import BaseLayout from './BaseLayout';
import Board from './Board';
import Contact from './Contact';
import History from './History';
import Home from './Home';
import Links from './Links';
import Museum from './Museum';
import Membership from './Membership';
import Newsletter from './Newsletter';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/board" component={Board} />
            <Route path="/contact" component={Contact} />
            <Route path="/history" component={History} />
            <Route path="/links" component={Links} />
            <Route path="/museum" component={Museum} />
            <Route path="/membership" component={Membership} />
            <Route path="/newsletter" component={Newsletter} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
