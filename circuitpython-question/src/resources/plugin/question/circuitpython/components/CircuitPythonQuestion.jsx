import React from 'react';
import CircuitPythonStudent from './CircuitPythonStudent';
import CircuitPythonInstructor from './CircuitPythonInstructor';

export default function CircuitPythonQuestion({ questionData, responseData, isInstructor, onChange }) {
  if (isInstructor) {
    return <CircuitPythonInstructor questionData={questionData} onChange={onChange} />;
  } else {
    return <CircuitPythonStudent questionData={questionData} responseData={responseData} onResponseChange={onChange} />;
  }
}
