// ===============================
// QPick Core App JS
// ===============================

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");
const menuBtn = document.querySelector(".menu-btn");
const carousel = document.getElementById("guideCarousel");
const productGrid = document.getElementById("productGrid");


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
// FAKE API PRODUCT DATA
// ===============================

const fakeProducts = [

{
title:"Gaming Laptop RTX 4060",
price:"₹89,999",
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
link:"#"
},

{
title:"Wireless Noise Cancel Headphones",
price:"₹7,499",
image:"https://images.unsplash.com/photo-1518444028785-8f0a0c6e2f1c",
link:"#"
},

{
title:"Mechanical Gaming Keyboard RGB",
price:"₹3,999",
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
link:"#"
},

{
title:"4K Creator Monitor",
price:"₹32,500",
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
link:"#"
},

{
title:"Smartphone 5G Flagship",
price:"₹54,999",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
link:"#"
},

{
title:"Wireless Gaming Mouse",
price:"₹2,499",
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
link:"#"
}

];


// ===============================
// Render Products
// ===============================

function renderProducts(){

if(!productGrid) return;

let html = "";

fakeProducts.forEach(product=>{

html += `

<div class="glass-card">

<img src="${product.image}" style="width:100%;border-radius:12px;margin-bottom:8px;">

<div class="card-title">
${product.title}
</div>

<div class="card-text">
Price: ${product.price}
</div>

<a href="${product.link}" class="social-pill" style="--chip-color:linear-gradient(135deg,#ff416c,#ff4b2b);">
View Deal →
</a>

</div>

`;

});

productGrid.innerHTML = html;

}


// ===============================
// Carousel Card Click → Load Products
// ===============================

function initCarouselClicks(){

const cards = document.querySelectorAll(".guide-card");

cards.forEach(card=>{

card.addEventListener("click",function(){

renderProducts();

if(productGrid){
productGrid.style.display = "grid";
}

productGrid.scrollIntoView({
behavior:"smooth"
});

});

});

}


// ===============================
// Init
// ===============================

document.addEventListener("DOMContentLoaded",function(){

initCarouselClicks();

});