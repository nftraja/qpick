/* ===============================
   QPick App Engine v1.0
   Core UI + Navigation System
================================ */

let drawer;
let overlay;

/* ---------- Drawer Toggle ---------- */

function toggleDrawer(){

if(!drawer || !overlay) return;

drawer.classList.toggle("active");
overlay.classList.toggle("active");

if(drawer.classList.contains("active")){
document.body.style.overflow="hidden";
}else{
document.body.style.overflow="";
}

}

/* ---------- App Boot ---------- */

document.addEventListener("DOMContentLoaded",function(){

console.log("QPick App Loaded");

/* elements */

drawer=document.getElementById("drawer");
overlay=document.getElementById("drawerOverlay");

/* overlay close */

if(overlay){
overlay.addEventListener("click",toggleDrawer);
}

/* ESC close */

document.addEventListener("keydown",function(e){

if(e.key==="Escape" && drawer.classList.contains("active")){
toggleDrawer();
}

});

/* category links */

const categoryLinks=document.querySelectorAll(".drawer a");

categoryLinks.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const category=this.textContent.trim();

console.log("Category clicked:",category);

toggleDrawer();

loadCategory(category);

});

});

/* quick cards */

const quickCards=document.querySelectorAll(".quick-card");

quickCards.forEach(card=>{

card.addEventListener("click",function(e){

e.preventDefault();

const title=this.querySelector(".quick-title").innerText;

console.log("Quick category:",title);

loadCategory(title);

});

});

/* utility buttons */

const utilityBtns=document.querySelectorAll(".utility-btn");

utilityBtns.forEach(btn=>{

btn.addEventListener("click",function(e){

e.preventDefault();

const action=this.innerText;

console.log("Utility action:",action);

});

});

/* bottom nav */

const bottomNav=document.querySelectorAll(".bottom-nav a");

bottomNav.forEach(nav=>{

nav.addEventListener("click",function(e){

e.preventDefault();

const navItem=this.innerText;

console.log("Bottom nav:",navItem);

});

});

});

/* ======================================
   Category Loader (Future Product API)
====================================== */

function loadCategory(category){

console.log("Loading category:",category);

/* future product loading system */

}