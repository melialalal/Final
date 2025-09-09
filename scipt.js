document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Danke für Ihre Anfrage – wir melden uns schnellstmöglich!");
    form.reset();
  });
});
