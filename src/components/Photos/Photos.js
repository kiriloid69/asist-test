import React, {Component} from 'react';
import Photo from './Photo';
import './style.css';

export default class Photos extends Component {
    render() {
        const {allPhotos} = this.props;
        return (
            <div className="PhotosPage">
              {
                allPhotos &&
                allPhotos
                    .map((item) => (
                        <Photo
                            key={item.id}
                            title={item.title}
                            // url = {item.url}
                            thumbnailUrl={item.thumbnailUrl}
                        />
                    ))
                    .splice(0, 12)
              }
            </div>
        );
    }
}

