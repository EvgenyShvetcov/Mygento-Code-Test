import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
