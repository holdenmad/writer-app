import React, {useState} from "react";

/* 

*/
const navElements: string[] = ["Save", "Sound", "Theme", "Font"];

const WritingField = () => {
  const [text, setText] = useState('');
    const handleSubmit = (e: any)=> {
        e.preventDefault();
        console.log(text)
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="helper">
      <div className="writingField"> 
      
      <textarea
        className="writingInput"
        placeholder="This is where you write stuff."
        value={text}
        onChange={(e)=> setText(e.target.value)}
      ></textarea>
    </div>
    </div>
     
      <input type="submit" value="submit"></input>
      <div className="navbar">
      {navElements.map((navEl) => <button className="navEl">{navEl}</button>)}
    </div>
    </form>
    
  );
};

export default WritingField;
