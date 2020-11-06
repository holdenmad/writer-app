import React from "react";


const navElements: string[] = ["Save", "Sound", "Theme", "Font"];


const Nav = () => {
  return (
    <div className="navbar">
      {navElements.map((navEl) => <button className="navEl">{navEl}</button>)}
    </div>
  );
};

export default Nav;
