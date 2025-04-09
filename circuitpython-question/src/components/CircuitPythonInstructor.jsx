import React, { useState, useEffect } from "react";
import ConnectionBar from "./ConnectionBar";
import MultiFileEditor from "./MultiFileEditor";
import FileAttributesBar from "./FileAttributesBar";

export default function CircuitPythonInstructor({ questionData, onChange }) {
  const [files, setFiles] = useState(questionData?.files || [
    {
      name: "main.py",
      path: "/starter",
      content: "# Write your CircuitPython code here"
    },
    {
      name: "other.py",
      path: "/solution",
      content: "def hello():\n    print('hi')\n"
    }
  ]);

  const [mainFilePath, setMainFilePath] = useState(questionData?.mainFile || `${files[0].path}/${files[0].name}`);
  const [codeChanged, setCodeChanged] = useState(false);
  const [activeFilePath, setActiveFilePath] = useState(`${files[0].path}/${files[0].name}`);
  const [activePath, setActivePath] = useState(`${files[0].path}`)

  const activeFile = files.find(f => `${f.path}/${f.name}` === activeFilePath);
  const isMain = `${activeFile?.path}/${activeFile?.name}` === mainFilePath;

  useEffect(() => {
    onChange?.({ files, mainFile: mainFilePath });
  }, [files, mainFilePath]);

  const handleFilenameChange = (newName) => {
    if (newName.includes("/")) {
      alert("File names cannot contain slashes.");
      return;
    }

    const newPath = activePath + '/' + newName;

    if (isMain) setMainFilePath(newPath);
    setActiveFilePath(newPath);

    setFiles(prevFiles => prevFiles.map(f =>
      `${f.path}/${f.name}` === activeFilePath ? { ...f, name: newName } : f
    ));

    setCodeChanged(true);
  };

  const handleFileContentChange = (newContent) => {
    setFiles(prevFiles => prevFiles.map(f =>
      `${f.path}/${f.name}` === activeFilePath ? { ...f, content: newContent } : f
    ));
    setCodeChanged(true);
  };

  const handleFileAttributeToggle = (attribute) => {
    setFiles(prevFiles => prevFiles.map(f =>
      `${f.path}/${f.name}` === activeFilePath ? { ...f, [attribute]: !f[attribute] } : f
    ));
  };

  const handleSetMainFile = () => {
    console.log('newmain', activeFilePath);
    setMainFilePath(activeFilePath);
  };

  const handleUploadComplete = () => {
    setCodeChanged(false);
  };

  const handleSetActiveFile = (fileId) => {
    setActiveFilePath(fileId);

    const newPath = files.find(f => `${f.path}/${f.name}` === fileId)?.path;
    
    if (newPath) setActivePath(newPath);
  }

  const handleSetActivePath = (path) => {
    setActiveFilePath(null);
    setActivePath(path);
  }

  const editFileAttributes = (
    <FileAttributesBar
      file={{ ...activeFile, isMain }}
      onToggleAttribute={handleFileAttributeToggle}
      onSetMain={handleSetMainFile}
    />
  );

  return (
    <div className="space-y-2">
      <ConnectionBar codeChanged={codeChanged} onUploadComplete={handleUploadComplete} />
      <MultiFileEditor
        files={files}
        activeFilePath={activeFilePath}
        activePath={activePath}
        onSetActiveFile={handleSetActiveFile}
        onSetActivePath={handleSetActivePath}
        onFileContentChange={handleFileContentChange}
        mainFilePath={mainFilePath}
        onSetMainFile={handleSetMainFile}
        toolBar={editFileAttributes}
        onFilenameChange={handleFilenameChange}
      />
    </div>
  );
}
