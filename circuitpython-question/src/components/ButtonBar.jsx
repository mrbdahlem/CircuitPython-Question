import React from "react";

export default function ButtonBar() {
  return (
    <div className="flex justify-end items-center h-full px-2 space-x-2 gap-4">
      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Connect</button>
      <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Upload</button>
      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Run</button>
    </div>
  );
}
