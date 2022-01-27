import React from "react";

// Code editor field
export default props => <textarea id="editor" type="text" onChange={props.handleChange} value={props.markdown} />;