import React, { useState, useEffect } from "react";

function StatusBar({ connected, uploaded, message }) {
  return (
    <div className="mt-2 text-sm text-gray-700 flex flex-wrap items-center justify-end gap-x-2">
      {message && <span className="whitespace-nowrap">{message}</span>}
      <span className={`font-medium whitespace-nowrap ${connected ? "text-green-600" : "text-red-500"}`}>
        {connected ? "Connected" : "Disconnected"}
      </span>
      <span>|</span>
      <span className={`font-medium whitespace-nowrap ${uploaded ? "text-green-600" : "text-red-500"}`}>
        Code {uploaded ? "" : "Not" } Uploaded
      </span>
    </div>
  );
}

export default function ConnectionBar({ codeChanged = true, onUploadComplete }) {
  const [connected, setConnected] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (codeChanged) setUploaded(false);
  }, [codeChanged]);

  const handleConnect = () => {
    const newState = !connected;
    setConnected(newState);
    setMessage(newState ? "Device connected." : "Device disconnected.");
    setUploaded(false);
  };

  const handleUpload = () => {
    if (!connected) return;
    
    setUploaded(true);
    setMessage("Code uploaded successfully.");
    onUploadComplete?.(); // notify parent
  };

  const handleRun = () => {
    if (!(connected && uploaded)) return;
    setMessage("Code running on device.");
  };

  return (
    <div className="flex flex-col justify-end gap-2 w-full">
        <div className="flex flex-row justify-end gap-4 min-w-[250px] w-full sm:w-auto">
          <button
            onClick={handleConnect}
            className={`px-3 py-1 rounded text-white ${connected ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {connected ? "Disconnect" : "Connect"}
          </button>

          <button
            onClick={handleUpload}
            disabled={!connected}
            className={`px-3 py-1 rounded text-white ${connected ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Upload
          </button>

          <button
            onClick={handleRun}
            disabled={!(connected && uploaded)}
            className={`px-3 py-1 rounded text-white ${(connected && uploaded) ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Run
          </button>
        </div>
      <StatusBar connected={connected} uploaded={connected && uploaded} message={message} />
    </div>
  );
}