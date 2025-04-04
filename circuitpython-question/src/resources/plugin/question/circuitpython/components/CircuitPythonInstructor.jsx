import React from 'react';

export default function CircuitPythonInstructor({ questionData, onChange }) {
  return (
    <div className="bg-gray-50 border p-4 rounded">
      <h4 className="text-lg font-bold mb-2">Instructor Editor</h4>
      <p className="text-sm text-gray-600">This will be the instructor view for configuring the question.</p>

      {/* Add controls for prompt, starter code, expected output, etc */}
      <textarea
        className="w-full mt-2 p-2 border rounded font-mono text-sm"
        placeholder="Starter code..."
        value={questionData?.initialCode || ''}
        readOnly
      />
    </div>
  );
}
