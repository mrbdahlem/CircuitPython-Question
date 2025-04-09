import React from "react";
import Toggle from "./Toggle";


export default function FileAttributesBar({ file, onToggleAttribute, onSetMain }) {
  return (
    <div className="inline-flex flex-col gap-1 text-sm min-w-max mb-2">
      <span className="text-gray-600 text-base">File Attributes:</span>
      <div className="flex flex-row flex-wrap gap-4 items-center">
        <Toggle
          label="Main"
          checked={file.isMain || false}
          onChange={() => !file.isMain && onSetMain?.(file.id)}
        />
        <Toggle
          label="Hidden"
          checked={file.isHidden || false}
          onChange={() => onToggleAttribute("isHidden")}
        />
        <Toggle
          label="Read Only"
          checked={file.isReadOnly || false}
          onChange={() => onToggleAttribute("isReadOnly")}
        />
      </div>
    </div>
  );
}