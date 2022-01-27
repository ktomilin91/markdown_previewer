import React from "react";

// App header, contains the Light/Dark mode switch
export default props => {
    return (
        <header>
          <div id="logo">
            <i id="logo" className="bi bi-pencil-square">&nbsp;</i>
            Markdown Previewer
          </div>
          <i id="modeSwitch" className={props.darkMode ? "bi bi-sun" : "bi bi-moon-stars-fill"} title={props.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} onClick={props.switchMode} />
        </header>
    );
};