import React, { Component } from 'react';
import Editor, { createEditorStateWithText, composeDecorators } from 'draft-js-plugins-editor';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createDragNDropUploadPlugin from '@mikeljames/draft-js-drag-n-drop-upload-plugin';
import { EditorSection } from './styled';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import 'draft-js-anchor-plugin/lib/plugin.css';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import editorStyles from './css/editorStyles.module.css';
import linkStyles from './css/linkStyles.module.css';
import toolbarStyles from './css/toolbarStyles.module.css';
import buttonStyles from './css/buttonStyles.module.css';
import { uploadme } from './upload/upload';

const linkPlugin = createLinkPlugin({
  theme: linkStyles,
  placeholder: 'http://…',
});
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: uploadme,
  addImage: imagePlugin.addImage,
});const staticToolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;

const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin, linkPlugin, undoPlugin, imagePlugin,   dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin];

class MyEditor extends Component {
  focus = () => {
    this.editor.focus();
  };

  state = {
    editorState: createEditorStateWithText(''),
  };

  onChange = (editorState) => this.setState({ editorState });

  render() {
    return (
      <EditorSection className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          placeholder='Tell a story...'
          spellCheck={true}
          ref={(element) => {
            this.editor = element;
          }}
        />
        <Toolbar>
          {// may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <linkPlugin.LinkButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
              <UndoButton {...externalProps} />
              <RedoButton {...externalProps} />
            </div>
          )}
        </Toolbar>
        <AlignmentTool />
      </EditorSection>
    );
  }
}
export default MyEditor;
