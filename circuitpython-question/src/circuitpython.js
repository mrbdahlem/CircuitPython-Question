import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import CircuitPythonStudent from './components/CircuitPythonStudent.jsx';
import CircuitPythonInstructor from './components/CircuitPythonInstructor.jsx';
import "./circuitpython.css";

let circuitpythonEditors = {};

const editorData = {};

export function initCircuitPythonEditor(question) {
    if (!circuitpythonEditors[question]) {
      circuitpythonEditors[question] = ()=>{console.log(init, question); CircuitPythonInstructorUI(question, null, null)};
    }
}

export function getResponse(question) {
  
}

export const CircuitPythonStudentUI = (questionEl, questionData, responseData, onResponseChange) => {
  const mount = questionEl.querySelector('.circuitpythonContainer');

  const root = ReactDOM.createRoot(mount);
  root.render(
    React.createElement(CircuitPythonStudent, {
      questionData,
      responseData,
      onResponseChange
    })
  );
}

export function CircuitPythonInstructorUI(questionEl, questionData, onChange) {
  const mount = questionEl.querySelector('.circuitpythonContainer');

  const Wrapper = () => {
    const [data, setData] = React.useState(questionData);
    const latestDataRef = React.useRef(data);

    // Update the ref *without* triggering re-renders
    latestDataRef.current = data;

    // Setup once
    React.useEffect(() => {
      questionEl.setData = (newData) => {
        setData(newData); // this is safe, unless it's being called constantly
      };

      questionEl.getData = () => latestDataRef.current;
    }, []); // only on mount

    return React.createElement(CircuitPythonInstructor, {
      questionData: data,
      onChange: (updated) => {
        setData(updated);        // update state
        onChange?.(updated);     // notify platform
      }
    });
  };

  const root = ReactDOM.createRoot(mount);
  root.render(React.createElement(Wrapper));
}

