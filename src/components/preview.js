import React from "react";
import DOMPurify from "dompurify";
import {marked, Renderer, setOptions} from "marked";
import Prism from "prismjs";

// Preview field
// Receives markdown string
export default props => {
    // Parsing markdown and converting it to HTML
    // Highlighting code snippets
    setOptions({
        breaks: true,
        highlight: code => Prism.highlight(code, Prism.languages.javascript, 'javascript')
    });
    const renderer = new Renderer();
    // Setting format for links
    renderer.link = (href, title, text) => `<a target="_blank" href="${href}">${text}</a>`;
    return (
        <div id="preview" dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(marked(props.markdown, { renderer: renderer }), {
                USE_PROFILES: {html: true}
            })
        }} />
    )
};