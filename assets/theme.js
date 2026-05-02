// Theme management — shared across all pages
(function () {
  const STORAGE_KEY = 'mts-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateIcon();
  }

  function updateIcon() { /* CSS handles icon visibility via data-theme */ }

  // Wire toggle button
  document.addEventListener('DOMContentLoaded', () => {
    updateIcon();
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });

  // Apply theme immediately
  applyTheme(getTheme());
})();
