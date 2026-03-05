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
// FAKE CATEGORY PRODUCT APIs
// ===============================

const productAPI = {

laptops:[
{
title:"Gaming Laptop RTX 4060",
price:"₹89,999",
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
link:"#"
},
{
title:"Ultrabook Intel i7",
price:"₹74,999",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
link:"#"
}
],

audio:[
{
title:"Noise Cancel Headphones",
price:"₹7,499",
image:"https://images.unsplash.com/photo-1518444028785-8f0a0c6e2f1c",
link:"#"
},
{
title:"Wireless Earbuds Pro",
price:"₹3,299",
image:"https://images.unsplash.com/photo-1585386959984-a41552231658",
link:"#"
}
],

gaming:[
{
title:"Mechanical RGB Keyboard",
price:"₹3,999",
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3",
link:"#"
},
{
title:"Wireless Gaming Mouse",
price:"₹2,499",
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
link:"#"
}
],

monitors:[
{
title:"4K Creator Monitor",
price:"₹32,500",
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
link:"#"
},
{
title:"144Hz Gaming Monitor",
price:"₹21,999",
image:"https://images.unsplash.com/photo-1587202372616-b43abea06c2a",
link:"#"
}
]

};


// ===============================
// Render Products
// ===============================

function renderProducts(category){

if(!productGrid) return;

const products = productAPI[category];

if(!products) return;

let html = "";

products.forEach(product=>{

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

productGrid.classList.add("active");

productGrid.scrollIntoView({
behavior:"smooth",
block:"start"
});

}


// ===============================
// Carousel Click Detection
// ===============================

document.addEventListener("DOMContentLoaded",function(){

const cards = document.querySelectorAll(".guide-card");

cards.forEach((card,index)=>{

card.addEventListener("click",function(e){

e.preventDefault();

let category = "";

if(index === 0) category="laptops";
if(index === 1) category="audio";
if(index === 2) category="audio";
if(index === 3) category="gaming";
if(index === 4) category="monitors";

renderProducts(category);

});

});

});