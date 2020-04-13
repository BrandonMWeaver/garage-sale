import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import Form from './components/Form';
import ItemsContainer from './containers/ItemsContainer';

import { getUsers } from './actions/userActions';
import { getCurrentUser } from './actions/currentUserActions';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getUsers();
  }

  render() {
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
        <Route exact path="/create-account" render={() => {
          return <Form type="Create Account" />
        }} />
        <Route exact path='/' render={() => {
          return <ItemsContainer resource='items' />
        }} />
        {this.props.users.map(user => {
          return (
            <Route key={user.id} exact path={`/${user.username.replace(/\s/g, '-').toLowerCase()}`} render={() => {
              return <ItemsContainer resource={`users/${user.id}/items`} />
            }} />
          );
        })}
      </Router>
    );
  }
}

export default connect(state => ({ users: state.users }), { getUsers, getCurrentUser })(App);
