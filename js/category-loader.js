const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const grid = document.getElementById("productGrid");
const title = document.getElementById("categoryTitle");

title.innerHTML = `
<div class="card-title">${category.replaceAll("-", " ")}</div>
<div class="theme-divider"></div>
`;

fetch(`../json/${category}.json`)
.then(res => res.json())
.then(products => {

let html = "";

products.forEach(p => {

html += `

<div class="glass-card">

<img src="${p.image}" style="width:100%;border-radius:12px;margin-bottom:8px;">

<div class="card-title">${p.name}</div>

<div class="card-text">Price: ${p.price}</div>

<div class="social-links">

<a href="${p.amazon}" class="social-pill"
style="--chip-color:linear-gradient(135deg,#ff9900,#ff6600);">
Amazon
</a>

<a href="${p.flipkart}" class="social-pill"
style="--chip-color:linear-gradient(135deg,#2874f0,#0056d6);">
Flipkart
</a>

<a href="${p.myntra}" class="social-pill"
style="--chip-color:linear-gradient(135deg,#ff3f6c,#ff0055);">
Myntra
</a>

</div>

</div>

`;

});

grid.innerHTML = html;

});