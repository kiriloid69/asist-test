import React, {Component} from 'react';
import './style.css'

class Photo extends Component {
  render() {
    const {title, thumbnailUrl} = this.props;
    return (
      <div className='PhotoCard'>
        <img className="image" src={thumbnailUrl} />
        <p className="textTitle">{title}</p>
      </div>
    )
  }
}

export default Photo;