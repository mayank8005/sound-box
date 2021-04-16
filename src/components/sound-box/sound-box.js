import React from 'react';
import './sound-box.css';

const SoundBox = (props) => {
    return (
        <div className="sound-box">
            <div className="sound-key">
                {props.soundKey}
            </div>
            <div className="sound-name">
                {props.soundName}
            </div>
        </div>
    );
}

export default SoundBox;
