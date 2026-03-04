/* ===============================
   QPick App Engine v1.0
   Core UI + Navigation System
================================ */

/* ---------- Drawer Elements ---------- */

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");
const menuBtn = document.querySelector(".menu-btn");

/* ---------- Drawer Toggle ---------- */

function toggleDrawer() {

    if(!drawer || !overlay) return;

    drawer.classList.toggle("active");
    overlay.classList.toggle("active");

    if(drawer.classList.contains("active")){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "";
    }
}

/* ---------- Menu Button ---------- */

if(menuBtn){
    menuBtn.addEventListener("click",toggleDrawer);
}

/* ---------- Overlay Close ---------- */

if(overlay){
    overlay.addEventListener("click",toggleDrawer);
}

/* ---------- ESC Key Close ---------- */

document.addEventListener("keydown",function(e){

    if(e.key === "Escape" && drawer.classList.contains("active")){
        toggleDrawer();
    }

});


/* ======================================
   Category Click System
====================================== */

const categoryLinks = document.querySelectorAll(".drawer a");

categoryLinks.forEach(link => {

    link.addEventListener("click",function(e){

        e.preventDefault();

        const category = this.textContent.trim();

        console.log("Category clicked:",category);

        toggleDrawer();

        loadCategory(category);

    });

});


/* ======================================
   Category Loader (Future Product API)
====================================== */

function loadCategory(category){

    console.log("Loading category:",category);

    /* future product loading system */

}


/* ======================================
   Quick Card Click System
====================================== */

const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach(card => {

    card.addEventListener("click",function(e){

        e.preventDefault();

        const title = this.querySelector(".quick-title").innerText;

        console.log("Quick category:",title);

        loadCategory(title);

    });

});


/* ======================================
   Utility Button Handler
====================================== */

const utilityBtns = document.querySelectorAll(".utility-btn");

utilityBtns.forEach(btn => {

    btn.addEventListener("click",function(e){

        e.preventDefault();

        const action = this.innerText;

        console.log("Utility action:",action);

    });

});


/* ======================================
   Bottom Navigation Handler
====================================== */

const bottomNav = document.querySelectorAll(".bottom-nav a");

bottomNav.forEach(nav => {

    nav.addEventListener("click",function(e){

        e.preventDefault();

        const navItem = this.innerText;

        console.log("Bottom nav:",navItem);

    });

});


/* ======================================
   App Boot
====================================== */

document.addEventListener("DOMContentLoaded",function(){

    console.log("QPick App Loaded");

});