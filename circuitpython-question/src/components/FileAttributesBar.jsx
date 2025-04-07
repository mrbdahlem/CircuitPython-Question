import React from "react";

function Toggle({ label, checked, onChange }) {
    return (
      <label className="inline-flex items-center gap-2">
        <div className="flex flex-row items-center h-5">
          <button
            role="switch"
            aria-checked={checked}
            onClick={onChange}
            className={`w-10 h-5 rounded-full transition-colors duration-300 ease-in-out focus:outline-none relative flex-shrink-0 ${
              checked ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                checked ? "translate-x-5" : "translate-x-0"
              }`}
            ></span>
          </button>
        </div>
        <span className="text-gray-700 leading-none self-center">{label}</span>
      </label>
    );
  }

export default function FileAttributesBar({ file, onToggleAttribute, onSetMain }) {
  return (
    <div className="inline-flex flex-col gap-1 text-sm min-w-max">
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