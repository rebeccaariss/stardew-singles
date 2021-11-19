import React from 'react';

const CloseButton = ({ onClose }) => {
    return (
        <div>
            <button className='f6 no-underline br-pill ba ph3 pv2 mb2 dib mid-gray' type='button' name='close' onClick={onClose}>X</button>
        </div>
    );
}

export default CloseButton;
