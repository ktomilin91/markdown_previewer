import React from "react";

// Code editor field
// Takes handleChange() function and markdown string
export default props => <textarea id="editor" type="text" onChange={props.handleChange} value={props.markdown} />;