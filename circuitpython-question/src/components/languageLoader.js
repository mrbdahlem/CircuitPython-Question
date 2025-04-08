// languageLoader.js

export const supportedLanguages = [
    "python",
    "javascript",
    "java",
    "cpp",
    "html",
    "markdown"
  ];
  
  export async function loadLanguageExtension(lang) {
    switch (lang) {
      case "python":
        return (await import("@codemirror/lang-python")).python();
      case "javascript":
        return (await import("@codemirror/lang-javascript")).javascript();
      case "java":
        return (await import("@codemirror/lang-java")).java();
      case "cpp":
        return (await import("@codemirror/lang-cpp")).cpp();
      case "html":
        return (await import("@codemirror/lang-html")).html();
      case "markdown":
        return (await import("@codemirror/lang-markdown")).markdown();
      default:
        return [];
    }
  }
  