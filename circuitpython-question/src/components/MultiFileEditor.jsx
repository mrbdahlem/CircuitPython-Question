import { useEffect } from 'react';
import CodeFileEditor from './CodeFileEditor';
import FileTree from './FileTree';

export default function MultiFileEditor({
  files,
  activeFilePath,
  activePath,
  onFileContentChange,
  onSetActiveFile,
  onSetActivePath,
  mainFilePath,
  toolBar,
  onFilenameChange
}) {
  const activeFile = files.find(f => `${f.path}/${f.name}` === activeFilePath);

  return (
    <div className="grid grid-cols-[1fr_4fr] gap-4">
      <FileTree
        files={files}
        activeFilePath={activeFilePath}
        mainFilePath={mainFilePath}
        onSetActiveFile={onSetActiveFile}
        onSetActivePath={onSetActivePath}
        activePath={activePath}
      />
      <div>
        <CodeFileEditor
            file={activeFile}
            onFileContentChange={onFileContentChange}
            onFilenameChange={onFilenameChange}
            toolBar={toolBar}
        />
      </div>
    </div>
  );
}
