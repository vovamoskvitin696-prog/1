document.addEventListener("DOMContentLoaded", () => {
  // If the EXE has not been placed in downloads yet, explain how to publish it.
  const links = document.querySelectorAll('a[href="downloads/Jarvis.exe"]');
  links.forEach(link => link.addEventListener("click", event => {
    // Static sites cannot reliably check whether a local file exists before download.
    // A missing file will show a normal 404; publish Jarvis.exe in /downloads to enable it.
  }));
});