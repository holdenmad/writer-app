import React from "react";

/* 

By clicking on the 'Save' button, the following should happen:
- Textarea is 'submitted' in form
- Action on submit is to turn the text in the text area into a file (what type?)
- Action on submit is also to save the file to local computer 

*/

const navElements: string[] = ["Save", "Sound", "Theme", "Font"];


const Nav = () => {
  return (
    <div className="navbar">
      {navElements.map((navEl) => <button className="navEl">{navEl}</button>)}
    </div>
  );
};

export default Nav;
