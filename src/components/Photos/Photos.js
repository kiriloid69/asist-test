import React, {Component, useState} from 'react';
// import Modal from '../Modal/Modal';
import Photo from './Photo';
import './style.css';

export default class Photos extends Component {
    render() {
        const {allPhotos} = this.props;
        // const [selectedPhoto, setSelectedPhoto] = useState(null);
        return (
            <div className="PhotosPage">
              {
                allPhotos &&
                allPhotos
                    .map((item) => (
                        <Photo
                            key={item.id}
                            title={item.title}
                            thumbnailUrl={item.thumbnailUrl}
                            // setSelectedPhoto = {setSelectedPhoto}
                        />
                    ))
                    .splice(0, 12)
              }
              {/* <Modal selectedPhoto={selectedPhoto} /> */}
            </div>
        );
    }
}

