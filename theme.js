(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    root.dataset.theme = storedTheme;
  }

  const activeTheme = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const updateButton = () => {
    if (!button) return;
    const dark = activeTheme() === "dark";
    button.textContent = dark ? "Light" : "Dark";
    button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  };

  button?.addEventListener("click", () => {
    const nextTheme = activeTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateButton();
  });

  updateButton();
})();
