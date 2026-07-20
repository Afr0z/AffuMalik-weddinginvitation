


// ================================
// Wedding Countdown
// ================================

const weddingDate = new Date("August 09, 2026 11:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML =
            "<h2>💍 Alhamdulillah! Our Wedding Day Has Arrived ❤️</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);


// ================================
// Background Music
// ================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let started = false;

// Play music on first tap anywhere
document.body.addEventListener("click", () => {

    if (!started) {
        music.play().catch(() => {});
        started = true;
        musicBtn.innerHTML = "🔇";
    }

}, { once: true });


// Toggle Music
musicBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "🔇";

    } else {

        music.pause();
        musicBtn.innerHTML = "🔊";

    }

});


// ================================
// Floating Hearts
// ================================

const hearts = document.getElementById("hearts");

const icons = [
    "❤️",
    "💖",
    "💕",
    "🌸",
    "✨",
    "🌹",
    "🤍"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 500);


// ================================
// Scratch to Reveal Date
// ================================

const scratch = document.getElementById("scratchLayer");

if (scratch) {

    function revealDate() {

        scratch.style.opacity = "0";
        scratch.style.pointerEvents = "none";

    }

    // Desktop
    scratch.addEventListener("click", revealDate);

    // Android & iPhone
    scratch.addEventListener("touchstart", revealDate);

}


// ================================
// Fade In Page
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
