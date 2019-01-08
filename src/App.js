import React, { Component } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default App;
