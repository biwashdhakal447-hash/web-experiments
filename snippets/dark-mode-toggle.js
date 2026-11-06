// Drop-in dark/light theme toggle. Expects a button#themeToggle.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const apply = (light) => {
    root.classList.toggle('light', light);
    if (btn) btn.textContent = light ? 'â˜€ï¸' : 'ðŸŒ™';
  };
  apply(localStorage.getItem('theme') === 'light');
  btn && btn.addEventListener('click', () => {
    const light = !root.classList.contains('light');
    apply(light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  });
})();
