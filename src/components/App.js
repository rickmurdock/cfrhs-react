import React, { Component } from 'react';
import '../styles/App.css';

// import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Components
import BaseLayout from './BaseLayout';
import Board from './Board';
import Contact from './Contact';
import Gallery from './Gallery';
import History from './History';
import Home from './Home';
import Links from './Links';
import Museum from './Museum';
import Membership from './Membership';
import Newsletter from './Newsletter';
import Shop from './Shop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/board" component={Board} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/history" component={History} />
            <Route path="/links" component={Links} />
            <Route path="/museum" component={Museum} />
            <Route path="/membership" component={Membership} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
