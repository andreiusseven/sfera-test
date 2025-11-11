// Gestione pulsanti della pagina di selezione
const fisiatriaButton = document.getElementById("fisiatriaButton");
const exitButton = document.getElementById("exitButton");

fisiatriaButton.addEventListener("click", () => {
  // Passa il topic via query string
  window.location.href = "test.html?topic=fisiatria";
});

exitButton.addEventListener("click", () => {
  // Nel web non si chiude il browser: torniamo alla home
  window.location.href = "index.html";
});
