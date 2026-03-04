/* QPick Global Script Engine */

/* =========================
   Drawer System
========================= */

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");

function toggleDrawer() {

  if (!drawer || !overlay) return;

  drawer.classList.toggle("active");
  overlay.classList.toggle("active");

  if (drawer.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

}

/* Overlay click close */

if (overlay) {
  overlay.addEventListener("click", toggleDrawer);
}

/* ESC key close */

document.addEventListener("keydown", function (e) {

  if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
    toggleDrawer();
  }

});


/* =========================
   Future Engine Hooks
========================= */

/*
ये functions आगे use होंगे:

- Product API fetch
- Product render
- Filters
- Search
*/

function initQPick(){

  console.log("QPick Engine Initialized");

}

document.addEventListener("DOMContentLoaded", initQPick);