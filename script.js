/* ===========================================
   SELECT ELEMENTS
=========================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");
const timer = document.getElementById("timer");

let playing = false;

/* ===========================================
   MUSIC BUTTON
=========================================== */

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();
        musicBtn.innerHTML = "🎵";
        playing = false;

    } else {

        music.play();
        musicBtn.innerHTML = "⏸";
        playing = true;

    }

});

/* ===========================================
   RUNNING NO BUTTON
=========================================== */

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

/* ===========================================
   YES BUTTON
=========================================== */

yesBtn.addEventListener("click", () => {

    alert("❤️ YAY! Thank You ❤️\n\nYou Made My Life Beautiful 💍");

    document.body.style.background =
    "linear-gradient(135deg,#ff0080,#ff4d6d,#ff758c)";

});

/* ===========================================
   HEART RAIN
=========================================== */

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    heart.style.fontSize =
        (Math.random() * 25 + 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);

/* ===========================================
   ROSE RAIN
=========================================== */

const roses = document.getElementById("roses");

function createRose() {

    const rose = document.createElement("div");

    rose.classList.add("rose");

    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "%";

    rose.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    rose.style.fontSize =
        (Math.random() * 15 + 25) + "px";

    roses.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    }, 9000);

}

setInterval(createRose, 700);

/* ===========================================
   COUNTDOWN TIMER
=========================================== */

const targetDate = new Date("February 14, 2027 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes =
        Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    const seconds =
        Math.floor((distance % (1000 * 60))
        / 1000);

    timer.innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}, 1000);