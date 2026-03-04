/* ===============================
   QPick App Engine
================================ */

/* ---------- Elements ---------- */

let drawer;
let overlay;
let menuBtn;


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


/* ======================================
   Dummy Product Database
====================================== */

const dummyProducts={

"laptops & computing":[
{title:"HP Pavilion Laptop",price:"₹59,990",link:"#"},
{title:"Dell Inspiron Laptop",price:"₹54,990",link:"#"},
{title:"Lenovo IdeaPad Slim",price:"₹49,990",link:"#"},
{title:"ASUS VivoBook Laptop",price:"₹52,990",link:"#"}
],

"smartphones & tablets":[
{title:"Samsung Galaxy Smartphone",price:"₹24,999",link:"#"},
{title:"Redmi Note Smartphone",price:"₹17,999",link:"#"},
{title:"Realme Narzo Smartphone",price:"₹14,999",link:"#"},
{title:"iQOO Budget Smartphone",price:"₹19,999",link:"#"}
],

"audio & headphones":[
{title:"Sony Wireless Headphones",price:"₹6,999",link:"#"},
{title:"Boat Bluetooth Earbuds",price:"₹2,499",link:"#"},
{title:"JBL Wireless Earphones",price:"₹3,999",link:"#"},
{title:"Noise Airbuds",price:"₹2,199",link:"#"}
]

};


/* ======================================
   Load Products
====================================== */

function loadCategory(category){

const grid=document.getElementById("productGrid");

if(!grid) return;

grid.innerHTML="";

category=category.toLowerCase();

let products=dummyProducts[category];

if(!products){

grid.innerHTML="<div class='glass-card'><div class='card-text'>Products coming soon</div></div>";
return;

}

products.forEach(product=>{

const card=document.createElement("div");

card.className="glass-card";

card.innerHTML=`
<div class="card-title">${product.title}</div>
<div class="theme-divider"></div>
<div class="card-text">${product.price}</div>
<a href="${product.link}" class="utility-btn">View Deal</a>
`;

grid.appendChild(card);

});

}


/* ======================================
   Carousel Scroll
====================================== */

function scrollCarousel(direction){

const container=document.getElementById("guideCarousel");

if(!container) return;

const scrollAmount=220;

container.scrollBy({
left:direction*scrollAmount,
behavior:"smooth"
});

}


/* ======================================
   App Boot
====================================== */

document.addEventListener("DOMContentLoaded",function(){

console.log("QPick App Loaded");


/* ---------- Elements Init ---------- */

drawer=document.getElementById("drawer");
overlay=document.getElementById("drawerOverlay");
menuBtn=document.querySelector(".menu-btn");


/* ---------- Menu Button ---------- */

if(menuBtn){
menuBtn.addEventListener("click",toggleDrawer);
}


/* ---------- Overlay Close ---------- */

if(overlay){
overlay.addEventListener("click",toggleDrawer);
}


/* ---------- ESC Close ---------- */

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){
if(drawer && drawer.classList.contains("active")){
toggleDrawer();
}
}

});


/* ======================================
   Drawer Category Click
====================================== */

document.querySelectorAll(".drawer a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

/* clean emoji + spaces */
let category=this.textContent
.replace(/[^\w\s&]/g,"")
.trim();

toggleDrawer();

loadCategory(category);

});

});


/* ======================================
   Quick Card Click
====================================== */

document.querySelectorAll(".quick-card").forEach(card=>{

card.addEventListener("click",function(e){

e.preventDefault();

const title=this.querySelector(".quick-title").innerText.trim();

loadCategory(title);

});

});


});