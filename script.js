/* ==========================================
        LOADER REMOVAL
========================================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 2000);
});

/* ==========================================
        TYPING EFFECT
========================================== */
const titleText = "❤️ Will You Marry Me? ❤️";
const subText = "You make my heart skip a beat...";
const typing = document.getElementById("typing");
const subTyping = document.getElementById("sub-typing");

let titleIndex = 0;
let subIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        typing.innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    } else {
        setTimeout(typeSub, 500);
    }
}

function typeSub() {
    if (subIndex < subText.length) {
        subTyping.innerHTML += subText.charAt(subIndex);
        subIndex++;
        setTimeout(typeSub, 60);
    }
}

typeTitle();

/* ==========================================
        AUDIO CONTROL
========================================== */
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

function playMusic() {
    music.play().then(() => {
        isPlaying = true;
        musicBtn.innerHTML = "<i class='fa-solid fa-pause'></i>";
        musicBtn.classList.add("pulse-animation");
    }).catch(err => console.log("User interaction required"));
}

function pauseMusic() {
    music.pause();
    isPlaying = false;
    musicBtn.innerHTML = "<i class='fa-solid fa-music'></i>";
    musicBtn.classList.remove("pulse-animation");
}

musicBtn.onclick = (e) => {
    e.stopPropagation();
    if (!isPlaying) {
        playMusic();
    } else {
        pauseMusic();
    }
};

/* ==========================================
        YES & NO INTERACTIONS WITH POPUP
========================================== */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesPopup = document.getElementById("yesPopup");
const closePopup = document.getElementById("closePopup");

let yesScale = 1;
let noScale = 1;

// NO button slides away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 180);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// If they manage to click NO, make YES bigger
noBtn.addEventListener("click", () => {
    yesScale += 0.3;
    noScale -= 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
    if(noScale <= 0.3) {
        noBtn.style.display = "none";
    } else {
        noBtn.style.transform = `scale(${noScale})`;
    }
});

// YES Button - Reveals Success Letter and Memories Gallery
yesBtn.onclick = () => {
    // Dynamic overlay theme change
    document.querySelector('.overlay').style.background = "radial-gradient(circle, rgba(60, 0, 30, 0.75) 0%, rgba(0,0,0,0.95) 100%)";
    
    // Auto-play music if it wasn't playing
    if (!isPlaying) playMusic();

    // Trigger Popup
    yesPopup.classList.add("active");

    // Start Real Canvas Fireworks
    startFireworks();
};

// Close Popup Button
closePopup.onclick = () => {
    yesPopup.classList.remove("active");
};

/* ==========================================
        RAIN GENERATORS
========================================== */
const heartsContainer = document.getElementById("hearts");
const rosesContainer = document.getElementById("roses");

function createFallingElement(container, char, baseSpeed) {
    const el = document.createElement("div");
    el.className = container.id === "hearts" ? "heart" : "rose";
    el.innerHTML = char;
    el.style.left = Math.random() * 100 + "%";
    
    const size = (15 + Math.random() * 25);
    el.style.fontSize = size + "px";
    
    const duration = (baseSpeed + Math.random() * 4);
    el.style.animationDuration = duration + "s";
    
    container.appendChild(el);
    setTimeout(() => { el.remove(); }, duration * 1000);
}

setInterval(() => createFallingElement(heartsContainer, "❤️", 5), 350);
setInterval(() => createFallingElement(rosesContainer, "🌹", 6), 650);

/* ==========================================
        STARS GENERATOR
========================================== */
const stars = document.getElementById("stars");
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = (1.5 + Math.random() * 3) + "s";
    star.style.animationDelay = Math.random() * 2 + "s";
    stars.appendChild(star);
}

/* ==========================================
        MOUSE SPARKLES
========================================== */
document.addEventListener("mousemove", (e) => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    
    const randomColors = ["#ff007f", "#ff4d88", "#ff0066", "#ffccd5"];
    spark.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    
    document.body.appendChild(spark);
    setTimeout(() => { spark.remove(); }, 800);
});

/* ==========================================
        COUNTDOWN TIMER
========================================== */
const countdown = document.getElementById("countdown");
const targetDate = new Date("2026-02-14").getTime(); 

function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff < 0) {
        countdown.innerHTML = "<span>Our Beautiful Journey Has Begun ❤️</span>";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <span>${d} Days</span> 
        <span>${h} Hours</span> 
        <span>${m} Mins</span> 
        <span>${s} Secs</span>
    `;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ==========================================
        ADVANCED FIREWORKS ENGINE
========================================== */
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

let fireworksActive = false;
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class FireworkParticle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 2.5 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 6 + 2;
        this.gravity = 0.08;
        this.friction = 0.98;
        this.opacity = 1;
        this.fade = Math.random() * 0.015 + 0.01;
        this.velocityX = Math.cos(this.angle) * this.speed;
        this.velocityY = Math.sin(this.angle) * this.speed;
    }

    update() {
        this.velocityX *= this.friction;
        this.velocityY *= this.friction;
        this.velocityY += this.gravity;
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.opacity -= this.fade;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function spawnExplosion(x, y) {
    const colors = ["#ff0055", "#ff4d8d", "#00f0ff", "#ffb700", "#ff00ff", "#ffffff"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 60; i++) {
        particles.push(new FireworkParticle(x, y, color));
    }
}

function animateFireworks() {
    if (!fireworksActive) return;
    requestAnimationFrame(animateFireworks);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        const rx = Math.random() * canvas.width;
        const ry = Math.random() * (canvas.height * 0.6);
        spawnExplosion(rx, ry);
    }

    particles = particles.filter(p => p.opacity > 0);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
}

function startFireworks() {
    fireworksActive = true;
    animateFireworks();
    setTimeout(() => {
        fireworksActive = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 15000); // stops after 15 seconds
}