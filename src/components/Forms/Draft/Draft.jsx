
import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import { RichUtils } from "draft-js";
import editorStyles from './editorStyles.css';
import {EditorSection} from './styled';
import "draft-js-inline-toolbar-plugin/lib/plugin.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

class MyEditor extends Component {

  focus = () => {
    this.editor.focus();
  };

  onChange = editorState => {
    this.props.onChange("editorState", editorState);
    console.log("TCL: MyEditor -> editorState", editorState)
  };

  render() {
    return (
      <EditorSection className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.props.editorState}
          onChange={this.onChange}
          plugins={plugins}
          placeholder="Tell a story..."
          spellCheck={true}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </EditorSection>
    );
  }
}
export default MyEditor;
