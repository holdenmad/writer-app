import React from "react";
import "./styles/App.scss";
import WritingField from "./components/WritingField";
import Nav from "./components/Nav";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Typey Type</h1>
      </header>
        <div >
          <WritingField />
       </div>
    </div>
  );
}

export default App;
