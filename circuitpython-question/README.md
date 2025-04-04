# 🐍 CircuitPython Question Type

This project defines a custom **CircuitPython-based question type** for learn.mycode.run. It provides both a **student-facing coding interface** and an **instructor editor view**, built with modern web tools.

---

## ✨ Features

- Styled with TailwindCSS
- Built for use in embedded fragments via Thymeleaf

- 🔧 **Student Interface**
  - React-based code editor

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
src/
├─ assets/templates/fragments/question/circuitpython.html   # Thymeleaf fragments
├─ resources/plugin/question/circuitpython/
│  ├─ circuitpython.js                 # Entry point for question logic
│  ├─ circuitpython.css                # TailwindCSS entry
│  ├─ components/
│  │  ├─ CircuitPythonStudent.jsx      # Student-facing component
│  │  ├─ CircuitPythonInstructor.jsx   # Instructor editor component
│  │  └─ CircuitPython.stories.jsx     # Storybook stories for both views
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

## 🏗️ Development Notes

- TailwindCSS is initialized via `@tailwind base;`, `components;`, and `utilities;` in `circuitpython.css`.
- Use `CircuitPythonStudent.jsx` and `CircuitPythonInstructor.jsx` for view-specific logic.
- `circuitpython.js` handles mounting, state passing, and Learn platform integration.

---

## 📦 Build

```bash
npm run build
```

---

## 🧰 TODO / Coming Soon

- [ ] Instructor editing + saving to backend
- [ ] Output validation or hash-based autograding
- [ ] Serial upload / WebUSB testing support
- [ ] Code highlighting or block-based editor (optional)

---

## 📄 License

MIT License © 2025

