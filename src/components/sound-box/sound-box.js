import React, { useState, useEffect, useMemo } from "react";
import "./sound-box.css";

const SoundBox = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useMemo(() => new Audio(`/sounds/${props.fileName}`), [
    props.fileName,
  ]);

  useEffect(() => {
    const keyDownEvenetHandler = (event) => {
      const keyPressed = event.key.toUpperCase();
      if (keyPressed === props.soundKey) {
        setIsPlaying(true);
        audio.play().catch(() => {
            console.log('Audio not found !')
        });
      }
    };
    // adding event listener
    document.addEventListener("keydown", keyDownEvenetHandler);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => document.removeEventListener("keydown", keyDownEvenetHandler);
  }, [props.fileName, props.soundKey, audio, setIsPlaying]);

  return (
    <div
      className={`sound-box ${
        isPlaying ? "sound-box-playing-border" : "sound-box-normal-border"
      }`}
    >
      <div className="sound-key">{props.soundKey}</div>
      <div className="sound-name">{props.soundName}</div>
    </div>
  );
};

export default SoundBox;
