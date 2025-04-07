import React, { useState, useEffect } from "react";
import ConnectionBar from "./ConnectionBar";

export default function CircuitPythonInstructor({ questionData, onChange }) {
  const [filename, setFilename] = useState(questionData?.filename || "main.py");
  const [fileContent, setFileContent] = useState(questionData?.starterCode || "# Write your CircuitPython code here");

  // Notify parent on change
  useEffect(() => {
    const newData = { filename, fileContent };
    if (
      questionData?.filename !== filename ||
      questionData?.fileContent !== fileContent
    ) {
      onChange?.(newData);
    }
  }, [filename, fileContent]);

  const codeChanged = questionData?.starterCode !== fileContent;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">Starter Code</label>
      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row-reverse gap-4 flex-wrap">
          <div className="min-w-[300px] flex-1 px-2 py-2">
            <ConnectionBar codeChanged={codeChanged} />
          </div>
          <div className="relative border border-b-0 rounded-t px-2 py-2 min-w-[300px] flex-1">
            <input
              className="w-full px-2 pt-5 pb-1 peer rounded-b-none"
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400">
              Filename
            </label>
          </div>
        </div>
        <textarea
          className="w-full border border-t rounded-t-none rounded-b px-2 py-1 font-mono"
          rows={10}
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
        />
      </div>
    </div>
  );
}