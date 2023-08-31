const toggleThemeBtn = document.getElementById('toggle__theme__btn');
const themeHandler = document.querySelector('[data-theme]');

toggleThemeBtn.addEventListener('click', () => {
  if (themeHandler.getAttribute('data-theme') === 'light') {
    themeHandler.setAttribute('data-theme', 'dark');
    toggleThemeBtn.innerText = 'Light theme';
  } else {
    themeHandler.setAttribute('data-theme', 'light');
    toggleThemeBtn.innerText = 'Dark theme';
  }
});
