import React from "react";
import "./main-container.css";

import { BACKGROUND_IMAGE_URL, SOUNDS } from "../../App.contants";

import SoundBox from "../sound-box/sound-box";

const MainContainer = () => {
  return (
    // Adding inline style to set background image to css cannot access public folder due to
    // react import restrictions
    <div
      className="main-container"
      style={{
        "background-image": `url(${BACKGROUND_IMAGE_URL})`,
      }}
    >
      <div className="sound-buttons-panel">
        {SOUNDS.map((sound) => (
          <SoundBox soundName={sound.soundName} soundKey={sound.soundKey} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
