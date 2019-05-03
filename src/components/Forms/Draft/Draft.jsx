import React, { Component } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import BlockControls from "./BlockControls/BlockControls";
import InlineControls from "./InlineControls/InlineControls";
import { EditorContainer, EditorSection } from "./styled";
class MyEditor extends Component {
  onChange = editorState => {
    this.props.onChange("editorState", editorState);
  };

  focus = () => this.refs.editor.focus();

  handleKeyCommand = command => {
    const { editorState } = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onTab = e => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth));
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.props.editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    );
  };

  styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2
    }
  };

  render() {
    const { editorState } = this.props;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    console.log({ editorState });
    return (
      <EditorContainer>
        <BlockControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <EditorSection onClick={this.focus}>
          <Editor
            customStyleMap={this.styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
          />
        </EditorSection>
      </EditorContainer>
    );
  }
}

export default MyEditor;
