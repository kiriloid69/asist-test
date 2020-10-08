import React from 'react';

import './style.css'

class Album extends Component {
  render() {
    const {title, thumbnailUrl} = this.props;
    return (
      <div className='Album'>
        <img className="image" src={thumbnailUrl} />
        <p className="textTitle">{title}</p>
      </div>
    )
  }
}

export default Photo;