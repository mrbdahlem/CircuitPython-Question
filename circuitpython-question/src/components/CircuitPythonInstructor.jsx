import React, { useState, useEffect } from "react";
import ConnectionBar from "./ConnectionBar";
import CodeFileEditor from "./CodeFileEditor";
import FileAttributesBar from "./FileAttributesBar";

export default function CircuitPythonInstructor({ questionData, onChange }) {
  const [files, setFiles] = useState(questionData?.files || [
    {
      id: "/starter/main.py",
      filename: "main.py",
      path: "/",
      content: "# Write your CircuitPython code here"
    }
  ]);

  const [mainFileId, setMainFileId] = useState(questionData?.mainFile || files[0]?.id);
  const [codeChanged, setCodeChanged] = useState(false);
  const [activeFileId, setActiveFileId] = useState(files[0]?.id);

  const activeFile = files.find(f => f.id === activeFileId);
  const isMain = activeFile?.id === mainFileId;

  useEffect(() => {
    onChange?.({ files, mainFile: mainFileId });
  }, [files, mainFileId]);

  const handleFilenameChange = (newName) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) =>
        f.id === activeFile.id ? { ...f, filename: newName } : f
      )
    );
    setCodeChanged(true);
  };

  const handleFileContentChange = (newContent) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) =>
        f.id === activeFile.id ? { ...f, content: newContent } : f
      )
    );
    setCodeChanged(true);
  };

  const handleFileAttributeToggle = (attribute) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) =>
        f.id === activeFile.id ? { ...f, [attribute]: !f[attribute] } : f
      )
    );
  };

  const handleSetMainFile = (fileId) => {
    setMainFileId(fileId);
  };

  const handleUploadComplete = () => {
    setCodeChanged(false);
  };

  const toolbar = (
    <div className="flex flex-row-reverse flex-wrap gap-2">
      <div className="flex-1 min-w-[300px]">
        <ConnectionBar codeChanged={codeChanged} onUploadComplete={handleUploadComplete} />
      </div>
      <div className="mr-auto">
        <FileAttributesBar
          file={{ ...activeFile, isMain }}
          onToggleAttribute={handleFileAttributeToggle}
          onSetMain={handleSetMainFile}
        />
      </div>
    </div>
  );

  if (!activeFile) return null;

  return (
    <div className="space-y-2">
      <CodeFileEditor
        file={{ ...activeFile, isMain }}
        onFilenameChange={handleFilenameChange}
        onFileContentChange={handleFileContentChange}
        toolBar={toolbar}
        language="python"
        autoCloseBracketsAndQuotes={true}
        smartIndent={true}
        indentSize={3}
        fontSize="1em"
        theme="darcula"
      />
    </div>
  );
}