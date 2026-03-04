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

if(menuBtn){
menuBtn.addEventListener("click",toggleDrawer);
}

if(overlay){
overlay.addEventListener("click",toggleDrawer);
}



// =====================================================
// CAROUSEL CONTROL
// =====================================================

function scrollCarousel(direction){

const carousel = document.getElementById("guideCarousel");

if(!carousel) return;

const scrollAmount = 220;

carousel.scrollBy({
left:direction * scrollAmount,
behavior:"smooth"
});

}



// =====================================================
// SEARCH DROPDOWN PANEL
// =====================================================

const dropdown = document.querySelector(".search-dropdown");
const panel = document.getElementById("searchPanel");

function toggleSearchPanel(){

if(!panel) return;

if(panel.style.display==="block"){
panel.style.display="none";
}else{
panel.style.display="block";
}

}

if(dropdown){
dropdown.addEventListener("click",toggleSearchPanel);
}



// =====================================================
// CLICK OUTSIDE DROPDOWN CLOSE
// =====================================================

document.addEventListener("click",function(e){

if(panel && dropdown){

if(!dropdown.contains(e.target) && !panel.contains(e.target)){
panel.style.display="none";
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