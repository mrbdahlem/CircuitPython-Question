import React from 'react';
import ReactDOM from 'react-dom/client';
import CircuitPythonStudent from './components/CircuitPythonStudent.jsx';
import CircuitPythonInstructor from './components/CircuitPythonInstructor.jsx';
import "./circuitpython.css";

let responses = {};
let editorData = {};

export function getResponse(questionEl) {
  return JSON.stringify(responses[questionEl.id] || { code: '' });
}

export function getEditorData(questionEl) {
  return editorData[questionEl.id] || {};
}

console.log('✅ circuitpython.js loaded and not tree-shaken');

export const CircuitPythonStudentUI = (questionEl, questionData, responseData) => {
  const mount = questionEl.querySelector('#circuitpython-root');

  const onResponseChange = (data) => {
    responses[questionEl.id] = data;
  };

  const root = ReactDOM.createRoot(mount);
  root.render(
    React.createElement(CircuitPythonStudent, {
      questionData,
      responseData,
      onResponseChange
    })
  );
}

export function CircuitPythonInstructorUI(questionEl, questionData) {
  const mount = questionEl.querySelector('#circuitpython-root');

  const onChange = (data) => {
    editorData[questionEl.id] = data;
  };

  const root = ReactDOM.createRoot(mount);
  root.render(
    React.createElement(CircuitPythonInstructor, {
      questionData,
      onChange
    })
  );
}

console.log('Exports:', {
  CircuitPythonStudentUI,
  CircuitPythonInstructorUI
});