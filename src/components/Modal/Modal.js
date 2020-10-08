import React from 'react';
import './style.css';

const Modal = ({selectedPhoto}) => {
    return (
        <div className="backdrop">
            <img src={selectedPhoto} alt="photo is loading..." />
        </div>
    )
};

export default Modal;
