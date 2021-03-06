import React, { useState, useEffect, useMemo } from "react";
import "./sound-box.css";

const SoundBox = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useMemo(() => new Audio(`/sounds/${props.fileName}`), [
    props.fileName,
  ]);

  useEffect(() => {
    // Event handler to play required sound if correct key is pressed
    const keyDownEvenetHandler = (event) => {
      const keyPressed = event.key.toUpperCase();
      const soundKey = props.soundKey.toUpperCase();

      if (keyPressed === soundKey) {
        setIsPlaying(true);
        audio.play().catch(() => {
          console.log("Audio not found !");
        });
      }
    };
    // adding event listener
    document.addEventListener("keydown", keyDownEvenetHandler);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => document.removeEventListener("keydown", keyDownEvenetHandler);
  }, [props.fileName, props.soundKey, audio, setIsPlaying]);

  return (
    <div className={`sound-box ${isPlaying ? "playing" : ""}`}>
      <div className="sound-key">{props.soundKey}</div>
      <div className="sound-name">{props.soundName}</div>
    </div>
  );
};

export default SoundBox;
