// ✦ COUNTDOWN TIMER — Princess Rexaine's Debut
// Event Date: April 24, 2026 (LOCAL TIME - FIXED)

document.addEventListener("DOMContentLoaded", () => {

  // ✅ Use LOCAL time (no timezone bugs)
  const eventDate = new Date(2026, 3, 24, 0, 0, 0).getTime();

  const countdownEl = document.getElementById("countdown");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // 🎉 When event starts
    if (distance < 0) {
      clearInterval(timerInterval);
      countdownEl.innerHTML =
        '<p style="color:var(--gold-light);font-family:var(--font-serif);font-size:1.2rem;letter-spacing:0.2em;">✦ The celebration has begun! ✦</p>';
      return;
    }

    // ⏱️ Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // ✨ Display (with leading zero)
    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  // 🚀 Run immediately + every second
  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);

});