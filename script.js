document.addEventListener("DOMContentLoaded", () => {
  // The application is hosted in GitHub Releases.
  const links = document.querySelectorAll('a[href^="https://github.com/vovamoskvitin696-prog/1/releases/"]');
  links.forEach(link => link.addEventListener("click", event => {
    // GitHub Releases serves the downloadable Windows application.
  }));
});