import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import '../styles/App.css';

//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import BaseLayout from './BaseLayout';
import Home from './Home';
import Museum from './Museum';
import Membership from './Membership';

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
            <Route path="/museum" component={Museum} />
            <Route path="/membership" component={Membership} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
