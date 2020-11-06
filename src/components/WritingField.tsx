import React, { useState, useRef, useLayoutEffect } from "react";
import { Button, TextArea, useTheme } from "../ThemeContext";
import { withTheme } from "styled-components";
// import ReactPlayer from 'react-player' (should I use this instead or the normal audio element?)

// import audioClip from '../assets/typewriter_click.wav'
//Why doesn't this work?

const WritingField = (props: any) => {
  // CONTEXT
  const themeToggle = useTheme();
  //why do we use themeToggle.toggle() as the function?

  // STATES
  const [text, setText] = useState("");

  // REFS
  const soundFXRef = useRef<HTMLAudioElement>(null);

  // FUNCTIONS

  //Theme Toggler
  const handleToggle = () => {
    themeToggle.toggle();
  };

  //Sound Effects with KeyDown
  const handleKeyDown = () => {
    console.log(soundFXRef.current);
    if (soundFXRef.current !== null) {
      soundFXRef.current.play();
      console.log(soundFXRef.current.play());
    }
  };

  //Sound toggler (not finished)
  const toggleSound = () => {
    console.log("Sound toggled!");
  };

  //Submit Form (not working, only here to validate)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(text);
  };

  // const handleDownload = (e: any) => {
  //   console.log("File downloaded!");
  // };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="helper">
        <div className="writingField">
          <TextArea
            onKeyDown={handleKeyDown}
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

      <div className="navbar">
        <Button onClick={handleToggle} value="theme">
          {props.theme.mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
        {/* <Button onClick={toggleSound} value="sound">
          Sound
        </Button> */}
        {/* <button type="submit" value="submit" className="navEl">
          Save
        </button>
        <button onClick={handleDownload} className="navEl" value="download">
          Download
  </button> */}
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
