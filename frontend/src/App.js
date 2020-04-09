import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import PostsContainer from './containers/PostsContainer';

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
      <PostsContainer />
    </Router>
  );
}

export default App;
