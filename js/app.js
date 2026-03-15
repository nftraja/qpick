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

.then(res => res.json())

.then(data => {

let html = "";

data.brands.forEach(brand => {

html += `

<div class="brand-card">

<div class="brand-logo">
<img src="https://logo.clearbit.com/${brand.domain}" alt="${brand.name}">
</div>

<div class="brand-name">
${brand.name}
</div>

<p class="brand-desc">
${brand.description}
</p>

<a href="${brand.link}" class="brand-btn">
${brand.button} →
</a>

</div>

`;

});

brandGrid.innerHTML = html;

})

.catch(err => console.log("Brand JSON Error:",err));

}