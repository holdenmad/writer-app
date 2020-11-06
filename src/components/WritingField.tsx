import React, { useState, useRef, useLayoutEffect } from "react";
import { Button, TextArea, useTheme } from "../ThemeContext";
import { withTheme } from "styled-components";
import Sounds from "./Sounds";
import ReactPlayer from 'react-player'

// import audioClip from '../assets/typewriter_click.wav'
// Audio works with external link but not internally

// VARIABLES
// const audioClip: HTMLAudioElement = document.getElementById("audioClip")[0]

const WritingField = (props: any) => {
  // CONTEXT
  const themeToggle = useTheme();
  //why do we use themeToggle.toggle() as the function?

  // STATES
  const [text, setText] = useState("");

  // REFS
  const soundFXRef = useRef<HTMLAudioElement>(null);

  useLayoutEffect(() => {
    // console.log(soundFXRef.current);
  });

  // FUNCTIONS
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(text);
  };

  const handleDownload = (e: any) => {
    console.log("File downloaded!");
  };

  const handleToggle = () => {
    themeToggle.toggle();
    console.log("Toggled!");
  };

  const handleKeyPress = () => {
    console.log(soundFXRef.current);
    if (soundFXRef.current !== null) {
      soundFXRef.current.play();
      console.log(soundFXRef.current.play())
    }
  };

  const toggleSound = () => {
    console.log("Sound toggled!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="helper">
        <div className="writingField">
          <TextArea
            onKeyDown={handleKeyPress}
            className="writingInput"
            placeholder="This is where you write stuff."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextArea>

        
          <audio id="audioClip" ref={soundFXRef} autoPlay controls hidden>
            Audio not defined
            <source src="http://soundbible.com/grab.php?id=2108&type=mp3"></source>
          </audio>

        </div>
      </div>

      {/* <input type="submit" value="submit"></input> */}
      <div className="navbar">
        {/* <button type="submit" value="submit" className="navEl">
          Save
        </button>
        <button onClick={handleDownload} className="navEl" value="download">
          Download
        </button> */}

        <Button onClick={toggleSound} value="sound">
          Sound
        </Button>
        <Button onClick={handleToggle} value="theme">
          {props.theme.mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>

        {/* <button className="navEl" value="minus">
          -
        </button>
        <button className="navEl" value="plus">
          +
        </button> */}
        {/* <{navElements.map((navEl) => <button className="navEl">{navEl}</button>)}> */}
      </div>
    </form>
  );
};

export default withTheme(WritingField);
