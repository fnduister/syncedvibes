import React, { Component } from "react";
import { EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
import BlockControls from "./BlockControls/BlockControls";
import InlineControls from "./InlineControls/InlineControls";
import {
  ControlsContainer,
  EditorStyled,
  CustomButton,
  EditorSection,
  Container
} from "./styled";
import { mediaBlockRenderer } from "./entities/mediaBlockRenderer";
import Button from "./Button/Button";
import CustomBlockControls from "./CustomBlockControls/CustomBlockControls";

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

  onAddImage = e => {
    e.preventDefault();
    const { editorState } = this.props;
    const urlValue = window.prompt("Paste Video Link");
    console.log("TCL: MyEditor -> urlValue", urlValue)
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "image",
      "IMMUTABLE",
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    console.log("TCL: MyEditor -> entityKey", entityKey)
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      "create-entity"
    );
    console.log("TCL: MyEditor -> newEditorState", newEditorState)
    this.onChange(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
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
      fontFamily: '"Roboto","Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2
    }
  };

  render() {
    const { editorState } = this.props;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    return (
      <Container>
        <ControlsContainer>
          <BlockControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <CustomBlockControls
            onAddImage={this.onAddImage}
            editorState={editorState}
          />
        </ControlsContainer>
        <EditorSection onClick={this.focus}>
          <EditorStyled
            customStyleMap={this.styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
            blockRendererFn={mediaBlockRenderer}
          />
        </EditorSection>
      </Container>
    );
  }
}

export default MyEditor;
