// ====================================
// QPick Command Search Engine
// ====================================


// search index

const searchIndex = [

{type:"category",name:"Laptops"},
{type:"category",name:"Smartphones"},
{type:"category",name:"Gaming Gear"},
{type:"category",name:"Headphones"},
{type:"category",name:"Monitors"},
{type:"category",name:"Accessories"},

{type:"brand",name:"Apple"},
{type:"brand",name:"Samsung"},
{type:"brand",name:"Sony"},
{type:"brand",name:"Dell"},
{type:"brand",name:"HP"},
{type:"brand",name:"Asus"},

{type:"deal",name:"Laptop Deals"},
{type:"deal",name:"Smartphone Deals"},
{type:"deal",name:"Gaming Deals"},

{type:"guide",name:"Laptop Buying Guide"},
{type:"guide",name:"Best Gaming Setup"},
{type:"guide",name:"Best Budget Phones"}

];



// ====================================
// SEARCH INPUT
// ====================================

const searchInput = document.querySelector(".search-input");
const searchPanel = document.getElementById("searchPanel");



// ====================================
// RENDER RESULTS
// ====================================

function renderResults(results){

searchPanel.innerHTML="";

if(results.length===0){

searchPanel.innerHTML=`
<a>No results found</a>
`;

return;

}

results.forEach(item=>{

let icon="🔎";

if(item.type==="category") icon="📦";
if(item.type==="brand") icon="🏷";
if(item.type==="deal") icon="🔥";
if(item.type==="guide") icon="📘";

const el=document.createElement("a");

el.innerHTML=`
${icon} ${item.name}
`;

searchPanel.appendChild(el);

});

}



// ====================================
// SEARCH ENGINE
// ====================================

if(searchInput){

searchInput.addEventListener("input",function(){

const query=this.value.toLowerCase();

if(query.length===0){

searchPanel.style.display="none";
return;

}

const results=searchIndex.filter(item=>{

return item.name.toLowerCase().includes(query);

});

renderResults(results);

searchPanel.style.display="block";

});

}



// ====================================
// CLICK OUTSIDE CLOSE
// ====================================

document.addEventListener("click",function(e){

if(!searchInput.contains(e.target) && !searchPanel.contains(e.target)){

searchPanel.style.display="none";

}

});