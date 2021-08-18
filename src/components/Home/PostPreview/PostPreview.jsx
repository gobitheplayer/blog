import React, { Component } from 'react';
import "./PostPreview.css"

export class PostPreview extends Component {
  render() {
    return (
      <div className="postPreview">
        <p>{this.props.time}</p>
        <h2>{this.props.title}</h2>
        <button onClick={this.props.history}>{'Read more >>'}</button>
      </div>
    )
  }
}

export default PostPreview
