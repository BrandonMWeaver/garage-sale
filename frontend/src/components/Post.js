import React, { Component } from 'react';

import '../styles/Post.css'

class Post extends Component {
	render() {
		return (
			<div className="post">
				<h3>{this.props.post.title}</h3>
			</div>
		);
	}
}

export default Post;
