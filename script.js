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

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);


// ================================
// Background Music
// ================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let started = false;

document.body.addEventListener("click", () => {

    if (!started) {
        music.play().catch(() => {});
        started = true;
        musicBtn.innerHTML = "🔇";
    }

}, { once: true });

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

const icons = ["❤️","💖","💕","🌸","✨","🌹","🤍"];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 500);


// ================================
// Real Scratch Card
// ================================

const canvas = document.getElementById("scratchCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Silver scratch layer
    ctx.fillStyle = "#B8B8B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scratch text
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Scratch Here", canvas.width / 2, canvas.height / 2);

    ctx.globalCompositeOperation = "destination-out";

    let scratching = false;

    function erase(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener("mousedown", () => scratching = true);
    canvas.addEventListener("mouseup", () => scratching = false);
    canvas.addEventListener("mouseleave", () => scratching = false);

    canvas.addEventListener("mousemove", (e) => {
        if (!scratching) return;

        const rect = canvas.getBoundingClientRect();

        erase(
            e.clientX - rect.left,
            e.clientY - rect.top
        );
    });

    canvas.addEventListener("touchstart", () => scratching = true);

    canvas.addEventListener("touchend", () => scratching = false);

    canvas.addEventListener("touchmove", (e) => {

        e.preventDefault();

        if (!scratching) return;

        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];

        erase(
            touch.clientX - rect.left,
            touch.clientY - rect.top
        );

    }, { passive: false });

}


// ================================
// Fade In Page
// ================================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
