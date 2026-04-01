const envelope = document.getElementById("envelope");
const intro = document.getElementById("envelopeIntro");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // subtle "paper feel" delay
  setTimeout(() => {
    intro.classList.add("hide");
  }, 1600);

  setTimeout(() => {
    intro.style.display = "none";
  }, 2600);
});