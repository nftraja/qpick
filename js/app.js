// =====================================================
// QPICK CORE APP JS
// =====================================================


// =====================================================
// DRAWER MENU CONTROL
// =====================================================

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");
const menuBtn = document.querySelector(".menu-btn");

function toggleDrawer(){

drawer.classList.toggle("active");
overlay.classList.toggle("active");

}

menuBtn.addEventListener("click",toggleDrawer);

overlay.addEventListener("click",toggleDrawer);



// =====================================================
// CAROUSEL CONTROL
// =====================================================

function scrollCarousel(direction){

const carousel = document.getElementById("guideCarousel");

const scrollAmount = 220;

carousel.scrollBy({
left:direction * scrollAmount,
behavior:"smooth"
});

}



// =====================================================
// SEARCH DROPDOWN SYSTEM
// =====================================================

const dropdownBtn = document.querySelector(".search-dropdown");

let dropdownMenu;


if(dropdownBtn){

dropdownMenu = document.createElement("div");

dropdownMenu.className="search-dropdown-menu";

dropdownMenu.innerHTML=`

<div class="dropdown-item">💻 Products</div>
<div class="dropdown-item">🏷 Deals</div>
<div class="dropdown-item">🏢 Brands</div>
<div class="dropdown-item">🔥 Offers</div>
<div class="dropdown-item">📊 Compare</div>
<div class="dropdown-item">📈 Price Charts</div>
<div class="dropdown-item">📘 Buying Guides</div>
<div class="dropdown-item">🗂 Categories</div>

`;

dropdownBtn.parentElement.appendChild(dropdownMenu);

dropdownMenu.style.display="none";

dropdownBtn.addEventListener("click",()=>{

if(dropdownMenu.style.display==="none"){

dropdownMenu.style.display="block";

}else{

dropdownMenu.style.display="none";

}

});

}



// =====================================================
// CLICK OUTSIDE DROPDOWN CLOSE
// =====================================================

document.addEventListener("click",function(e){

if(dropdownMenu){

if(!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)){

dropdownMenu.style.display="none";

}

}

});



// =====================================================
// SEARCH QUICK FILTER
// =====================================================

const searchInput = document.querySelector(".search-input");

if(searchInput){

searchInput.addEventListener("input",function(){

const query = this.value.toLowerCase();

const cards = document.querySelectorAll(".quick-card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(query)){

card.style.display="flex";

}else{

card.style.display="none";

}

});

});

}



// =====================================================
// PRODUCT GRID DEMO DATA (OPTIONAL)
// =====================================================

const grid = document.getElementById("productGrid");

if(grid){

for(let i=1;i<=6;i++){

const card = document.createElement("div");

card.className="glass-card";

card.innerHTML=`

<div class="card-title">
Sample Product ${i}
</div>

<div class="card-text">
Smart product placeholder used for testing the QPick product grid system.
</div>

`;

grid.appendChild(card);

}

}