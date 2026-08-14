(() => {
  const storageKey = "theme";

  function preferredTheme() {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    } catch (error) {
      // Continue with the system preference when storage is unavailable.
    }
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Switch to day mode" : "Switch to night mode");
      toggle.title = isDark ? "Switch to day mode" : "Switch to night mode";
      toggle.textContent = isDark ? "\u2600" : "\u263e";
    }
  }

  applyTheme(preferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    applyTheme(document.documentElement.dataset.theme);
    toggle.addEventListener("click", () => {
      const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // The current-session theme still works when storage is unavailable.
      }
    });
  });
})();
