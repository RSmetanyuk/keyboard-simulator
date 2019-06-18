import React, { Component } from "react";
import Keyboard from "./Keyboard/Keyboard";
import Display from "./Display/Display";

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
