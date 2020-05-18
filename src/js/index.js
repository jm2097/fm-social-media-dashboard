const switcher = document.querySelector('#themeToggler');

const themeMap = {
  light: 'dark',
  dark: 'light',
};

const toggleTheme = e => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.className = `${themeMap[currentTheme]}-theme`;
  localStorage.setItem('theme', themeMap[currentTheme]);
};

switcher.onchange = toggleTheme;

window.onload = () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.className = `${currentTheme}-theme`;
  switcher.checked = currentTheme === 'dark';
};
