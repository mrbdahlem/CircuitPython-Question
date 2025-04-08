import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CircuitPythonStudent from './CircuitPythonStudent';
import CircuitPythonInstructor from './CircuitPythonInstructor';
import '@question/circuitpython.css'

function CircuitPythonQuestion({ questionData, responseData, isInstructor, onChange }) {
  if (isInstructor) {
    return <CircuitPythonInstructor questionData={questionData} onChange={onChange} />;
  } else {
    return <CircuitPythonStudent questionData={questionData} responseData={responseData} onResponseChange={onChange} />;
  }
}

class CircuitPythonQuestionElement extends HTMLElement {
  static get observedAttributes() {
    return ['question-data'];
  }

  connectedCallback() {
    this._latestData = null;
    this._mountPoint = document.createElement('div');
    this.appendChild(this._mountPoint);
    this._render();
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
    }
    this._latestData = null;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'question-data' && oldValue !== newValue) {
      this._render();
    }
  }

  _render() {
    if (!this._mountPoint) return;
    const questionData = this.getAttribute('question-data');
    const responseData = this.getAttribute('response-data');
    const isInstructor = this.getAttribute('is-instructor') === 'true';

    this._root = createRoot(this._mountPoint);
    this._root.render(
      <StrictMode>
        <CircuitPythonQuestion
          questionData={questionData ? JSON.parse(questionData) : null}
          responseData={responseData ? JSON.parse(responseData) : null}
          isInstructor={isInstructor}
          onChange={(data) => { this._latestData = data; }}
        />
      </StrictMode>
    );
  }
}

customElements.define('circuitpython-question', CircuitPythonQuestionElement);

// Map hooks to retrieve data from the custom element
//window.applyQuestionData = window.applyQuestionData || {};
window.applyQuestionData['circuitpython'] = function(questionEl, data) {
  const el = questionEl.querySelector('circuitpython-question');
  if (el) {
    el.setAttribute('question-data', JSON.stringify(data));
  }
};

//window.getSubmission = window.getSubmission || {};
window.getSubmission['circuitpython'] = function(questionEl) {
  return questionEl.querySelector('circuitpython-question')._latestData;
};

//window.getQuestionEditorData = window.getQuestionEditorData || {};
window.getQuestionEditorData['circuitpython'] = function(questionEl) {
  return questionEl.querySelector('circuitpython-question')._latestData;
};
