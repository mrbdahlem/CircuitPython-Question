import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

export default function CodeFileEditor({
  file,
  onFilenameChange,
  onFileContentChange,
  toolBar,
  language = "python"
}) {
  const getLanguageExtension = (lang) => {
    return loadLanguage(lang);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-end">
        <div className="relative border border-b-0 rounded-t px-2 py-2 w-full min-w-[100px] md:w-auto md:max-w-[300px]">
          <input
            className="w-full px-2 pt-5 pb-1 peer rounded-b-none"
            type="text"
            value={file.filename}
            onChange={(e) => onFilenameChange(e.target.value)}
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400">
            Filename
          </label>
        </div>
        
        <div className="flex-1 px-2 pt-2">
          {toolBar}
        </div>
      </div>
      <CodeMirror
        value={file.content}
        height="300px"
        extensions={[getLanguageExtension(language)]}
        basicSetup={{ lineNumbers: true }}
        onChange={(value) => onFileContentChange(value)}
        className="border border-t rounded-t-none rounded-b font-mono"
      />
    </div>
  );
}
