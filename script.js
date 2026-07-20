// ================================
// Wedding Countdown
// ================================

const weddingDate = new Date("August 09, 2026 11:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
            "<h2>💍 Alhamdulillah! Our Wedding Day Has Arrived 💖</h2>";

    }

}, 1000);


// ================================
// Background Music
// ================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

document.body.addEventListener("click", function () {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "🔇 ";

    }

}, { once: true });


musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔇 ";

    }

    else {

        music.pause();

        musicBtn.innerHTML = "🔊 ";

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
    "🤍",
    "🎊",
];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 14000);

}

setInterval(createHeart, 450);


// ================================
// Smooth Fade-in Animation
// ================================

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});

const scratch = document.getElementById("scratchLayer");

if (scratch) {
    scratch.addEventListener("mousemove", function(e) {
        if (e.buttons === 1) {
            scratch.style.opacity = "0";
        }
    });

    scratch.addEventListener("touchmove", function() {
        scratch.style.opacity = "0";
    });
}
