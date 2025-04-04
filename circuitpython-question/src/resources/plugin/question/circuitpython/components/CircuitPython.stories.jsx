import React from 'react';
import CircuitPythonStudent from './CircuitPythonStudent';
import CircuitPythonInstructor from './CircuitPythonInstructor';

export default {
  title: 'Question Types/CircuitPython',
  tags: ['autodocs'],
};

// ✅ Student View Story
export const Student = () => {
  const questionData = {
    prompt: '<p>Write a CircuitPython program that blinks an LED.</p>',
    initialCode: `import time\nfrom digitalio import DigitalInOut, Direction\nimport board\n\nled = DigitalInOut(board.D13)\nled.direction = Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(1)\n    led.value = False\n    time.sleep(1)`,
  };

  const responseData = null;

  const onResponseChange = (data) => {
    console.log('Student response:', data);
  };

  return (
    <div className="p-4 bg-gray-100">
      <CircuitPythonStudent
        questionData={questionData}
        responseData={responseData}
        onResponseChange={onResponseChange}
      />
    </div>
  );
};

// ✅ Instructor View Story
export const Instructor = () => {
  const questionData = {
    prompt: '<p>Write a CircuitPython program that blinks an LED.</p>',
    initialCode: `import time\nfrom digitalio import DigitalInOut, Direction\nimport board\n\nled = DigitalInOut(board.D13)\nled.direction = Direction.OUTPUT`,
  };

  const onChange = (data) => {
    console.log('Instructor data update:', data);
  };

  return (
    <div className="p-4 bg-white border rounded">
      <CircuitPythonInstructor
        questionData={questionData}
        onChange={onChange}
      />
    </div>
  );
};
