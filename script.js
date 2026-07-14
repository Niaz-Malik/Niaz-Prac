/* ==========================================
        LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },800);

    },2500);

});

/* ==========================================
        TYPING EFFECT
========================================== */

const text="❤️ Will You Marry Me? ❤️";

const typing=document.getElementById("typing");

let i=0;

function type(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,120);

    }

}

type();

/* ==========================================
        MUSIC
========================================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="<i class='fa-solid fa-pause'></i>";

}

else{

music.pause();

playing=false;

musicBtn.innerHTML="<i class='fa-solid fa-music'></i>";

}

};

/* ==========================================
        YES BUTTON
========================================== */

const yesBtn=document.getElementById("yesBtn");

yesBtn.onclick=()=>{

document.body.style.background="linear-gradient(135deg,#ff0080,#ff4d6d,#ff9a9e)";

alert("❤️ Thank You ❤️\n\nYou Made My Life Beautiful!");

startFireworks();

};

/* ==========================================
        RUNNING NO BUTTON
========================================== */

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-200);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

/* ==========================================
        HEART RAIN
========================================== */

const hearts=document.getElementById("hearts");

function heart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"%";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(heart,250);

/* ==========================================
        ROSE RAIN
========================================== */

const roses=document.getElementById("roses");

function rose(){

const r=document.createElement("div");

r.className="rose";

r.innerHTML="🌹";

r.style.left=Math.random()*100+"%";

r.style.fontSize=(20+Math.random()*20)+"px";

r.style.animationDuration=(5+Math.random()*5)+"s";

roses.appendChild(r);

setTimeout(()=>{

r.remove();

},9000);

}

setInterval(rose,700);

/* ==========================================
        STARS
========================================== */

const stars=document.getElementById("stars");

for(let i=0;i<200;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=(2+Math.random()*4)+"s";

stars.appendChild(star);

}

/* ==========================================
        CURSOR SPARKLES
========================================== */

document.addEventListener("mousemove",(e)=>{

const s=document.createElement("div");

s.className="spark";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},800);

});

/* ==========================================
        LOVE TIMER
========================================== */

const countdown=document.getElementById("countdown");

const target=new Date("2026-02-14").getTime();

setInterval(()=>{

const now=new Date().getTime();

const diff=target-now;

const d=Math.floor(diff/1000/60/60/24);

const h=Math.floor(diff%(1000*60*60*24)/(1000*60*60));

const m=Math.floor(diff%(1000*60*60)/(1000*60));

const s=Math.floor(diff%(1000*60)/1000);

countdown.innerHTML=

`${d} Days ❤️ ${h} Hours ❤️ ${m} Minutes ❤️ ${s} Seconds`;

},1000);

/* ==========================================
        FIREWORKS PLACEHOLDER
========================================== */

function startFireworks(){

console.log("Fireworks Started");

}