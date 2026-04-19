// Theme state management
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

let currentTheme: Theme = "light";

export function initTheme() {
  if (typeof window === "undefined") return;
  
  currentTheme = getInitialTheme();
  applyTheme(currentTheme);
  
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const stored = localStorage.getItem("theme");
    if (!stored) {
      currentTheme = e.matches ? "dark" : "light";
      applyTheme(currentTheme);
    }
  });
}

export function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
}

export function getTheme(): Theme {
  return currentTheme;
}

export function setTheme(theme: Theme) {
  currentTheme = theme;
  applyTheme(currentTheme);
}