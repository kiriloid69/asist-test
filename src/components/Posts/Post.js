import React, {Component} from 'react';
import './style.css'

class Post extends Component {
  render() {
    const {title, body} = this.props;
    return (
      <div className="Place">
        <h2 className="Title">{title}</h2>
        <p className="Description">{body}</p>
        <input placeholder="write comment..."/>
      </div>
    )
  }
}

export default Post;