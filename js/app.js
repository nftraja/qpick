// ===============================
// QPick Core App JS
// ===============================

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");
const menuBtn = document.querySelector(".menu-btn");
const carousel = document.getElementById("guideCarousel");


// ===============================
// Drawer Toggle
// ===============================

function toggleDrawer(){
drawer.classList.toggle("active");
overlay.classList.toggle("active");
}

if(menuBtn){
menuBtn.addEventListener("click", toggleDrawer);
}

if(overlay){
overlay.addEventListener("click", toggleDrawer);
}


// ===============================
// Carousel Scroll
// ===============================

function scrollCarousel(direction){

if(!carousel) return;

carousel.scrollBy({
left: direction * 220,
behavior:"smooth"
});

}