import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Post from '../components/Post';

import '../styles/PostsContainer.css';

class PostsContainer extends Component {
	render() {
		return (
			<div className="posts-container">
				<Route exact path='/' render={() => [1,2,3,4,5].map((n) => <Post key={n} post={{ title: "Example" }} />)} />
			</div>
		);
	}
}

export default PostsContainer;
