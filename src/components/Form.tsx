import React, { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e: any)=> {
        e.preventDefault();
        console.log(title)
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>Text</label>
      <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)} />
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default Form;
