import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './components/Header';
import NavigationBar from './components/NavigationBar';
import UserForm from './components/UserForm';
import ItemForm from './components/ItemForm';
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
          return <UserForm type="Sign In" />
        }} />
        <Route exact path="/create-account" render={() => {
          return <UserForm type="Create Account" />
        }} />
        <Route exact path={this.props.currentUser && "id" in this.props.currentUser ? "/post-item" : '/'} render={() => {
          return this.props.currentUser && "id" in this.props.currentUser ? <ItemForm /> : null
        }} />
        <Route exact path='/' render={() => {
          return <ItemsContainer resource="items" />
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

export default connect(state => ({ currentUser: state.currentUser, users: state.users }), { getCurrentUser, getUsers })(App);
