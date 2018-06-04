import React, { Component } from "react";
import "./App.css";
import View from "./View.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [150, 42, 61, 76, 123, 55, 92, 230, 10, 82, 330, 450],
      ci: [],
      quiz: true
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Screen">
          <View />
        </div>
      </div>
    );
  }
}

export default App;
