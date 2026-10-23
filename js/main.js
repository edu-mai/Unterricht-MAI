// Kleine, frameworkfreie Interaktion. Funktioniert auch auf GitHub Pages.
document.querySelectorAll('[data-toggle]').forEach((button) => {
  const panel = document.getElementById(button.dataset.toggle);
  if (!panel) return;
  button.addEventListener('click', () => {
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    button.setAttribute('aria-expanded', String(willOpen));
  });
});
