import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguageExtension } from "./languageLoader";

import { EditorView } from "@codemirror/view";
import * as themes from "@uiw/codemirror-themes-all";

const availableThemes = Object.keys(themes).filter(
  (key) => !key.startsWith("defaultSettings") && !key.endsWith("Init") && !key.endsWith("Style")
);

// console.log("Available themes:", availableThemes);

export { availableThemes };

export default function CodeFileEditor({
  file,
  readOnly,
  onFilenameChange,
  onFileContentChange,
  toolBar,
  language = "python",
  autoCloseBracketsAndQuotes = true,
  smartIndent = true,
  indentSize = 3,
  fontSize = "1em",
  theme = "darcula"
}) {
  const [languageExtension, setLanguageExtension] = useState([]);

  useEffect(() => {
    loadLanguageExtension(language).then((ext) => setLanguageExtension(ext));
  }, [language]);


  const fontSizeTheme = EditorView.theme({
    ".cm-content, .cm-gutters": {
      fontSize: fontSize
    }
  });

  const resolvedTheme = themes[theme] || themes["darcula"];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-end">
        <div className="relative border border-b-0 rounded-t px-2 py-2 w-full min-w-[100px] md:w-auto md:max-w-[300px]">
          <input
            id='filenameInput'
            className="w-full px-2 pt-5 pb-1 peer rounded-b-none"
            style={{ fontSize }}
            type="text"
            value={file ? file.name : ''}
            onChange={(e) => onFilenameChange(e.target.value)}
            placeholder=" "
            enabled={!readOnly && file}
          />
          <label htmlFor='filenameInput' className="absolute left-4 top-3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400">
            File Name
          </label>
        </div>

        <div className="flex-1 px-2 pt-2">
          {toolBar}
        </div>
      </div>
      <CodeMirror
        value={file ? file.content : ''}
        readOnly={readOnly || !file}
        height="300px"
        extensions={[languageExtension, fontSizeTheme]}
        theme={resolvedTheme}
        basicSetup={{
          lineNumbers: true,
          autocompletion: false,
          highlightActiveLine: false,
          closeBrackets: autoCloseBracketsAndQuotes,
          indentOnInput: smartIndent,
          tabSize: indentSize
        }}
        onChange={(value) => onFileContentChange(value)}
        className="border border-t rounded-t-none rounded-b font-mono"
      />
    </div>
  );
}
