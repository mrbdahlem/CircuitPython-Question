import RemoveFile from '@question/assets/glyphicons-filetypes-36-file-remove.svg';
import RemoveFolder from '@question/assets/glyphicons-filetypes-76-folder-remove.svg';
import Folder from '@question/assets/glyphicons-filetypes-62-folder-open.svg';
import AddFile from '@question/assets/glyphicons-filetypes-34-file-plus.svg';
import AddFolder from '@question/assets/glyphicons-filetypes-74-folder-plus.svg';

const levelIndent = {
    0: 'ml-0',
    1: 'ml-6',
    2: 'ml-12',
    3: 'ml-18',
    4: 'ml-24',
    5: 'ml-30',
    6: 'ml-36',
};

function renderTree(paths, level = 0, activeFilePath, activePath, mainFilePath, onSetActiveFile, onSetActivePath, onDeleteFile) {
    return Object.entries(paths).map(([key, file]) => {
        const isFile = file.type === 'file';
        const fileId = file.fullPath;
        const isActive = fileId === activeFilePath;
        const isMain = fileId === mainFilePath;
        const isActiveFolder = file.fullPath === activePath;

        return (
            <div key={fileId || key} className={`${levelIndent[level] || 'ml-0'} space-y-1`}>
                {isFile ? (
                    <div
                        onClick={() => onSetActiveFile(fileId)}
                        className={`p-2 border rounded cursor-pointer flex justify-between text-base items-center ${isActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-100'}`}
                    >
                        <span className={`flex-1 ${file.isHidden && 'text-gray-400'}`}>
                            {file.isHidden ? key : file.isReadOnly ? <em>{key}</em> : <strong>{key}</strong>}
                            {isMain && <span className="ml-4 text-xs text-muted">[main]</span>}
                        </span>
                        
                        <button onClick={(e) => { e.stopPropagation(); onDeleteFile(fileId); }}
                            className="ml-2 text-sm w-[1.5em] h-[1.5em] rounded-full" title="Delete file"
                        >
                            <RemoveFile alt='delete' className='w-[1.5em] h-[1.5em] text-red-800 hover:text-red-500'/>
                        </button>
                    </div>

                ) : (
                    <div className="space-y-1">
                        <div
                            onClick={() => {
                                onSetActivePath(file.fullPath);
                            }}
                            className={`flex justify-between cursor-pointer font-base rounded px-2 py-1 ${isActiveFolder ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'}`}
                        >
                            <div className='flex flex-row items-center'>
                                <Folder className='w-[1em] h-[1em] mr-2'/> {key}
                            </div>
                            
                            <div className='flex flex-row'>
                                <button onClick={(e) => { e.stopPropagation(); onAddFile(fileId); }}
                                    className="text-sm w-[1em] h-[1em] rounded-full" title="Add File"
                                >
                                    <AddFile alt='add folder' className='w-[1.5rem] h-[1.5rem] text-gray-700 hover:text-blue-500'/>
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); onAddFolder(fileId); }}
                                    className="text-sm w-[1em] h-[1em] rounded-full" title="Add Folder"
                                >
                                    <AddFolder alt='add folder' className='w-[1.5rem] h-[1.5rem] text-gray-700 hover:text-blue-500'/>
                                </button>
                                <div className='m-2'></div>
                                <button onClick={(e) => { e.stopPropagation(); onDeleteFolder(fileId); }}
                                    className="text-sm w-[1em] h-[1em] rounded-full " title="Delete Folder"
                                >
                                    <RemoveFolder alt='delete' className='w-[1.5rem] h-[1.5rem] text-red-800 hover:text-red-500' />
                                </button>
                            </div>
                        </div>
                        {renderTree(file.children, level + 1, activeFilePath, activePath, mainFilePath, onSetActiveFile, onSetActivePath, onDeleteFile)}
                    </div>
                )}
            </div>
        );
    });
}

function buildTree(files) {
    const tree = {};

    files.forEach(file => {
        const segments = file.path.split('/').filter(Boolean);
        let current = tree;
        let fullPath = '';

        segments.forEach((seg, idx) => {
            fullPath += '/' + seg;
            if (!current[seg]) {
                current[seg] = { type: 'folder', fullPath, children: {} };
            }
            current = current[seg].children;
        });

        current[file.name] = { type: 'file', ...file, fullPath: file.path + '/' + file.name };
    });

    return tree;
}

export default function FileTree({
    files,
    activeFilePath,
    mainFilePath,
    onSetActiveFile,
    onSetActivePath,
    activePath,
    onDeleteFile
}) {
    const fileTree = buildTree(files);
    console.log('Active Path', activePath)

    return (
        <div className="flex flex-col justify-between h-full overflow-y-auto space-y-4">
            <div className="space-y-2">
                {renderTree(fileTree, 0, activeFilePath, activePath, mainFilePath, onSetActiveFile, onSetActivePath, onDeleteFile)}
            </div>

            <div className="flex flex-row flex-wrap gap-2">
                <button
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                    onClick={() => {/* TODO: Add New File logic */ }}
                >
                    New File
                </button>
                <button
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    onClick={() => {/* TODO: Add New File logic */ }}
                >
                    New Folder
                </button>
            </div>
        </div>
    );
}
