import React from "react";
import Button from "../Button/Button";
import { Container } from "./styled";

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];
const InlineControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <Container className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <Button
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </Container>
  );
};

export default InlineControls;
