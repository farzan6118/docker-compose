(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const sync = () => {
    document.documentElement.classList.toggle('kcDarkModeClass', media.matches);
    
    document.documentElement.style.colorScheme = media.matches ? 'dark' : 'light';
  };
  sync();
  media.addEventListener('change', sync);
})();