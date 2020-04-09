import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import Form from './components/Form';
import ItemsContainer from './containers/ItemsContainer';

function App() {
  return (
    <Router>
      <Route path='/' render={() => {
        return (
          <>
          <Header />
          <NavigationBar />
          </>
        );
      }} />
      <Route exact path="/sign-in" render={() => {
        return <Form type="Sign In" />
      }} />
      <ItemsContainer />
    </Router>
  );
}

export default App;
