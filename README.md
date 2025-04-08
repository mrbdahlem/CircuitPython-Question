# 🐍 CircuitPython Question Type

This project defines a custom **CircuitPython-based question type** for learn.mycode.run. It provides both a **student-facing coding interface** and an **instructor editor view**, built with modern web tools.

---

## ✨ Features

- Styled with TailwindCSS
- Built for use in embedded fragments via Thymeleaf

- 🔧 **Student Interface**
  - React-based code editor and uploader

- 🧑‍🏫 **Instructor Editor**
  - Instructor view for editing starter code and question data

- ⚛️ **Frontend Stack**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Storybook](https://storybook.js.org/)

- 🧪 **Storybook Previews**
  - Live preview for both student and instructor views
  - Easy component development and design testing

---

## 📁 Project Structure

```
circuitpython.html                     # Thymeleaf fragments
src/
├─ circuitpython.js                 # Entry point for question logic
├─ circuitpython.css                # TailwindCSS entry
├─ components/
│  ├─ CircuitPythonStudent.jsx      # Student-facing component
│  ├─ CircuitPythonInstructor.jsx   # Instructor editor component
│  ├─ CircuitPython.stories.jsx     # Storybook stories for both views
│  │
```

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the dev server**

```bash
npm run dev
```

3. **Launch Storybook**

```bash
npm run storybook
```

---

## 🧩 Web Components Integration

This question type registers a custom HTML element called <circuitpython-question>, which wraps the React-based student and instructor interfaces.

💡 Benefits

Allows multiple instances of the question on the same page

Works seamlessly with Thymeleaf for injecting per-question data

Avoids global JavaScript logic and ID collisions

⚙️ Usage

To use in a Thymeleaf template:

```html
<circuitpython-question
  th:question-data="${question.data}"
  th:response-data="${response.responseData}"
  is-instructor="true">
</circuitpython-question>
```

- The question-data and response-data props are passed as attributes (JSON strings)
- The is-instructor attribute defaults to false and shows the student view when not present.

🏗️ Development Notes

- TailwindCSS is initialized in `circuitpython.css`.
- Use CircuitPythonStudent.jsx` and `CircuitPythonInstructor.jsx` for view-specific logic. `CircuitPythonQuestion.jsx is a one-stop-shop for both.
- `circuitpython.js` handles mounting, state passing, and Learn platform integration.

---

## ⚙️ Vite Dev & Build Setup
This project uses Vite to develop and build a circuitpython question type for learn.mycode with
`circuitpython.html` serving as the legacy entrypoint for thymeleaf to pull the student and instructor
interfaces.

### 🛠 Dev Mode
Run with `npm run dev`
- Vite serves `circuitpython.html` from the root
- `/src/circuitpython.js` serves as a loader for the React components for both the student and instructor UI in the
  html fragments thymeleaf loads for the questions.
- JS and CSS are live-reloaded automatically as components are edited.

### 📦 Build Mode
Run with `npm run build`
- Vite bundles everything from `circuitpython.html`
- Output goes to:

  `dist/src/main/webapp/resources/plugin/question/circuitpython/` for JS/CSS

  `dist/src/main/resources/templates/fragments/question/circuitpython.html` for the Thymeleaf fragment

---

## 🧰 TODO / Coming Soon (In no particular order)

- [ ] Instructor editing
  - [ ] React hooks for saving to backend
  - [ ] Reusable React replacement for file manager with
    - [ ] Student starter files
    - [ ] Solution files
    - [ ] Provided Data files
    - [ ] Test files (maybe not used for this questiontype)
    - [ ] Hidden files
- [ ] Student view
- [ ] Serial upload / WebUSB testing support in
  - [ ] Instructor view
  - [ ] Student view
- [ ] Code highlighting editor
- [ ] (optional) block-based editor
- [ ] Student Response
  - [ ] Loading
  - [ ] Saving

---

## 📄 License

MIT License © 2025