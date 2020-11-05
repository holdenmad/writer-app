import React from "react";
import "./styles/App.scss";
import WritingField from "./components/WritingField";
import Footer from "./components/Footer";
import Sounds from "./components/Sounds";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Typey Type</h1>
      </header>
      <div>
     
        <WritingField />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
