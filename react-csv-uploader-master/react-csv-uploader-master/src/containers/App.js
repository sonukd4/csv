import React, { Component } from "react";
import Settings from "./Settings";
import View from "./View";
import Fork from "../components/fork";
import Title from "../components/title";

class App extends Component {
  render() {
    return (
      <div>
        <Fork />
        <Title />
        <div className="appBody">
          <Settings />
          <View />
        </div>
      </div>
    );
  }
}
export default App;
