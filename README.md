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

## 🛠️ Vite Configuration

This project uses a custom vite.config.js to streamline development and build output for the Learn platform.

### Custom Behavior

- Library-style build outputs files to:
  `dist/src/main/webapp/resources/plugin/question/circuitpython/`

- Dev server runs at http://localhost:3000 and:
  - Opens /index.html automatically
  - Redirects / to /index.html
  - Proxies most /resources/* requests to https://learn.mycode.run,
    except the plugin path (/resources/plugin/question/circuitpython/*), which is served locally from public/

### Custom Vite Plugins
- `moveManifestPlugin`: Moves the Vite-generated manifest to dist/src/main/
- `copyCircuitPythonHTML`: Copies the HTML fragment to public/index.html for local dev
- `mirrorSourceToPublicPlugin`: Mirrors the latest build output into public/resources/... for development
- `rootRedirectPlugin`: Redirects / to /index.html in the dev server

## Workflow
- Run npm run build at least once to generate output
- Run npm run dev to start the local dev server
- Open http://localhost:3000/ to test your plugin in a browser
- Vite mirrors built files to public/resources/... for local access

## Output
- JavaScript, CSS, and source maps output to:
  `dist/src/main/webapp/resources/plugin/question/circuitpython/`
- manifest.json is relocated to:
  `dist/src/main/manifest.json`

### ✅ Development Workflow

1. Run `npm run build` at least once to generate output.
2. Run `npm run dev` to start the local server.
3. Visit `http://localhost:3000/` to test your question plugin in an HTML shell.
4. Changes to `dist/...` are automatically mirrored to `public/resources/...`.

---

## 📦 Build

```bash
npm run build
```

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