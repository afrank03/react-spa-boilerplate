import React from 'react';
import { render } from 'react-dom';
import './application/scss/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './application/components/Header';
import { Home } from './application/pages/Home';
import { Contact } from './application/pages/contact/Contact';
import { AllContacts } from './application/pages/contact/AllContacts';

const Application: React.FC = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/contact/:id">
        <Contact />
      </Route>
      <Route path="/contact">
        <AllContacts />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

render(
  <Router>
    <Application />
  </Router>,
  document.getElementById('root'),
);
