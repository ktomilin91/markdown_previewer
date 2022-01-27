import "./main.scss"

import React, {Component} from "react";
import ReactDOM from "react-dom";
import defaultText from "./components/default-text";
import Header from "./components/header";
import Editor from "./components/editor";
import Preview from "./components/preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultText,
      darkMode: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.switchMode = this.switchMode.bind(this);
  }
  // Handle user input
  handleChange(event) {
    this.setState({
        markdown: event.target.value
      });
  }
  // Switch between Light and Dark mode
  switchMode() {
      this.setState({
        darkMode: !this.state.darkMode
      });
    }
  render() {
    return (
      <div id="container" className={this.state.darkMode ? "darkMode" : "lightMode"}>
        <Header darkMode={this.state.darkMode} switchMode={this.switchMode} />
        <main id="content">
          <Editor handleChange={this.handleChange} markdown={this.state.markdown} />
          <Preview markdown={this.state.markdown} />
        </main>
      </div>
    );
  }
};

// Rendering App to the DOM
ReactDOM.render(<App />, document.getElementById("root"));