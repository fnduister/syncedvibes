import React, { Component } from "React";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
  }
  
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default MyEditor;
