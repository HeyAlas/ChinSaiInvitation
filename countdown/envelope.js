// ✦ COUNTDOWN TIMER — Princess Rexaine's Debut
// Event Date: April 24, 2026 at 4:00 PM

const eventDate = new Date("April 24, 2026 16:00:00").getTime();

function updateCountdown() {
  const now      = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      '<p style="color:var(--gold-light);font-family:var(--font-serif);font-size:1.4rem;letter-spacing:0.2em;">✦ The celebration has begun! ✦</p>';
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent    = String(days).padStart(2, "0");
  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);