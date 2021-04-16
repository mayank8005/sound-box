import React, {useEffect} from 'react';
import './sound-box.css';

const SoundBox = (props) => {

    useEffect(() => {
        const audio = new Audio(`/sounds/${props.fileName}`);

        const keyDownEvenetHandler = (event) => {
            const keyPressed = event.key.toUpperCase();
            if(keyPressed === props.soundKey) {
                audio.play();
            }
        }
        // adding event listener
        document.addEventListener("keydown", keyDownEvenetHandler);

        return () => document.removeEventListener("keydown", keyDownEvenetHandler);
    }, [props.fileName, props.soundKey]);

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
