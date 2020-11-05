import React, { useState, useRef, useLayoutEffect } from "react";
import { Button, TextArea, useTheme } from "../ThemeContext";
import { withTheme } from "styled-components";
import Sounds from "./Sounds";

/* 

By clicking on the 'Save' button, the following should happen:
- Textarea is 'submitted' in form
- Action on submit is to turn the text in the text area into a file (what type?)
- Action on submit is also to save the file to local computer 

*/

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
    console.log(soundFXRef.current);
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
    // const audioClip: any = document.getElementsByClassName("audio-clip")[0];
    // console.log(audioClip)
    console.log(soundFXRef);

    // soundFXRef.play();

    console.log("Key pressed!");
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
          >
            
          </TextArea>
          <audio id="audioClip" ref={soundFXRef} autoPlay controls>
              Audio not defined
              <source src="typewriter_click.wav"></source>
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
