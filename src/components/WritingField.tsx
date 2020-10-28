import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import styled, { withTheme } from "styled-components";
import { buttonBackgroundColor, buttonTextColor } from "../theme";

/* 

By clicking on the 'Save' button, the following should happen:
- Textarea is 'submitted' in form
- Action on submit is to turn the text in the text area into a file (what type?)
- Action on submit is also to save the file to local computer 

*/
const navElements: string[] = ["Save", "Sound", "Theme", "Font"];

const WritingField = (props: any) => {
  // CONTEXT
  const themeToggle = useTheme();

  const Button = styled.button`
  background: ${buttonBackgroundColor}
  color: ${buttonTextColor}
  `;

  // STATES
  const [text, setText] = useState("");

  // FUNCTIONS
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(text);
  };

  const handleDownload = (e: any) => {
    console.log("File downloaded!");
  };

  const handleToggle = () => {
    themeToggle.toggle()
    console.log("Toggled!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="helper">
        <div className="writingField">
          <textarea
            className="writingInput"
            placeholder="This is where you write stuff."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* <input type="submit" value="submit"></input> */}
      <div className="navbar">
        {/* <button type="submit" value="submit" className="navEl">
          Save
        </button>
        <button onClick={handleDownload} className="navEl" value="download">
          Download
        </button>
        <button className="navEl" value="sound">
          Sound
        </button> */}
        <Button onClick={handleToggle} className="navEl" value="theme">
         {props.theme.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>

        <button className="navEl" value="minus">
          -
        </button>
        <button className="navEl" value="plus">
          +
        </button>
        {/* <{navElements.map((navEl) => <button className="navEl">{navEl}</button>)}> */}
      </div>
    </form>
  );
};

export default withTheme(WritingField);
