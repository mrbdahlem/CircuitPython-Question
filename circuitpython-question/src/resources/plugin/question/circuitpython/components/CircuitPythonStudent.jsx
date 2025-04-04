import React, { useState, useEffect } from 'react';
import '../circuitpython.css';

/**
 * Props:
 * - questionData: object containing prompt, code blocks, initial state, etc.
 * - responseData: object containing saved student response
 * - onResponseChange: callback to notify host system of response updates
 */
export default function CircuitPython({ questionData, responseData, onResponseChange }) {
    const [code, setCode] = useState('');
  
    // Initialize with saved response or starter code
    useEffect(() => {
      if (responseData) {
        setCode(responseData.code || '');
      } else if (questionData?.initialCode) {
        setCode(questionData.initialCode);
      }
    }, [questionData, responseData]);
  
    // Call this to notify Learn system of response changes
    useEffect(() => {
      if (onResponseChange) {
        onResponseChange({ code });
      }
    }, [code]);
  
    return (
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="text-gray-800">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: questionData?.prompt || '<p>Loading prompt...</p>' }}
          />
        </div>
  
        <div className="bg-blue p-4">
          Student View
        </div>
      </div>
    );
  }