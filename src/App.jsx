import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from './Container';
import { Home } from './views/Home';
import { Dashboard } from './views/Dashboard';
import { Product } from './views/Product';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home prop1="prop1" />
          </Route>
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
