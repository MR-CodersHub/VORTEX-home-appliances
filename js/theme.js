/* ================================================================
   VORTEX THEME SYSTEM — Centralized Dark/Light & RTL/LTR Control
   Loaded synchronously in <head> to prevent Flash of Unstyled Content
   ================================================================ */

/* === IIFE: runs before DOM render to set attributes immediately === */
(function () {
  var theme = localStorage.getItem('vortex_theme') || 'dark';
  var dir   = localStorage.getItem('vortex_dir')   || 'ltr';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark';
})();

/* === SVG Icon Strings === */
var VORTEX_ICONS = {
  sun:  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  rtl:  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 11 3 7 7 3"/><line x1="21" y1="7" x2="3" y2="7"/><line x1="21" y1="17" x2="9" y2="17"/><polyline points="13 21 9 17 13 13"/></svg>',
  ltr:  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 21 7 17 3"/><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="15" y2="17"/><polyline points="11 21 15 17 11 13"/></svg>'
};

document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;

  function getTheme() { return html.getAttribute('data-theme') || 'dark'; }
  function getDir()   { return html.getAttribute('dir')         || 'ltr'; }

  /* --- Update all theme-toggle-btn icons on page --- */
  function syncThemeBtns() {
    var isDark = getTheme() === 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(function (btn) {
      btn.innerHTML = isDark ? VORTEX_ICONS.sun : VORTEX_ICONS.moon;
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      btn.setAttribute('aria-label', btn.title);
      btn.setAttribute('aria-pressed', isDark ? 'false' : 'true');
    });
  }

  /* --- Update all dir-toggle-btn icons on page --- */
  function syncDirBtns() {
    var isLtr = getDir() === 'ltr';
    document.querySelectorAll('.dir-toggle-btn').forEach(function (btn) {
      btn.innerHTML = isLtr ? VORTEX_ICONS.rtl : VORTEX_ICONS.ltr;
      btn.title = isLtr ? 'Switch to RTL Layout' : 'Switch to LTR Layout';
      btn.setAttribute('aria-label', btn.title);
      btn.setAttribute('aria-pressed', isLtr ? 'false' : 'true');
    });
  }

  /* --- Theme Toggle Click Handler --- */
  document.querySelectorAll('.theme-toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = getTheme() === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      html.style.colorScheme = next === 'light' ? 'light' : 'dark';
      localStorage.setItem('vortex_theme', next);
      syncThemeBtns();
    });
  });

  /* --- Direction Toggle Click Handler --- */
  document.querySelectorAll('.dir-toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = getDir() === 'ltr' ? 'rtl' : 'ltr';
      html.setAttribute('dir', next);
      localStorage.setItem('vortex_dir', next);
      syncDirBtns();
    });
  });

  /* --- Initialise icons on page load --- */
  syncThemeBtns();
  syncDirBtns();
});
