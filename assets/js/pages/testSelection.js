// Gestione pulsanti della pagina di selezione// Gestione pulsanti della pagina di selezione
const fisiatriaButton = document.getElementById("fisiatriaButton");
const animazioneButton = document.getElementById("animazioneButton");
const parametriButton = document.getElementById("parametriButton");
const igieneButton = document.getElementById("igieneButton");
const exitButton = document.getElementById("exitButton");

fisiatriaButton.addEventListener("click", () => {
  // Passa il topic via query string
  window.location.href = "test.html?topic=fisiatria";
});

animazioneButton.addEventListener("click", () => {
  window.location.href = "test.html?topic=animazione";
});

parametriButton.addEventListener("click", () => {
  window.location.href = "test.html?topic=parametri";
});

igieneButton.addEventListener("click", () => {
  window.location.href = "test.html?topic=igiene";
});

exitButton.addEventListener("click", () => {
  // Nel web non si chiude il browser: torniamo alla home
  window.location.href = "index.html";
});

