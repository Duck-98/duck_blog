import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

// TOAST UI Editor import
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// TOAST UI Editor Plugins

import chart from '@toast-ui/editor-plugin-chart';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';
import '@toast-ui/chart/dist/toastui-chart.css';
import React from 'react';

const PostWrite = () => (
  <Editor
    plugins={[codeSyntaxHighlight, tableMergedCell, uml, chart, colorSyntax]}
    initialValue="hello react editor world!"
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut
  />
);

export default PostWrite;
