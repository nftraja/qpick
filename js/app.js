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

// ===============================
// Load Brand Stores
// ===============================

const brandGrid = document.getElementById("brandGrid");

if(brandGrid){

fetch("json/brands.json")

.then(response => response.json())

.then(data => {

let html = "";

data.brands.forEach(brand => {

html += `

<div class="glass-card">

<div class="card-title">
${brand.name}
</div>

<div class="theme-divider-b"></div>

<p class="card-text">
${brand.description}
</p>

<div class="theme-divider-b"></div>

<a href="${brand.link}" class="social-pill"
style="--chip-color:linear-gradient(135deg,#ff512f,#dd2476,#396afc,#00c6ff);">

${brand.button} →

</a>

</div>

`;

});

brandGrid.innerHTML = html;

})

.catch(error => {

console.log("Brand JSON Error:", error);

});

}