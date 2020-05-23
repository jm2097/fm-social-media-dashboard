const switcher = document.querySelector('#themeToggler');

const themeMap = {
  light: 'dark',
  dark: 'light',
};

const toggleTheme = e => {
  const currentTheme =
    document.body.className.indexOf('light') > -1 ? 'light' : 'dark';
  document.body.className = `${themeMap[currentTheme]}-theme`;
};

switcher.onchange = toggleTheme;
