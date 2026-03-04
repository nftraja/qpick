// =====================================================
// QPICK SMART SEARCH ENGINE
// =====================================================


// SEARCH DATA

const qpickSearchData = [

{type:"product",name:"Laptops & Computing"},
{type:"product",name:"Smartphones & Tablets"},
{type:"product",name:"Audio & Headphones"},
{type:"product",name:"Gaming Gear"},
{type:"product",name:"Monitors & Displays"},

{type:"deal",name:"Top Deals"},
{type:"deal",name:"Flash Sales"},
{type:"deal",name:"Marketplace Offers"},

{type:"brand",name:"Apple"},
{type:"brand",name:"Samsung"},
{type:"brand",name:"Sony"},
{type:"brand",name:"Dell"},
{type:"brand",name:"Lenovo"},

{type:"guide",name:"Laptop Buying Guide"},
{type:"guide",name:"Smartphone Buying Guide"},
{type:"guide",name:"Gaming Setup Guide"}

];


// SEARCH ELEMENTS

const searchInput = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-glass");

let searchResults;


// CREATE RESULT PANEL

if(searchInput){

searchResults = document.createElement("div");

searchResults.className = "search-results";

searchContainer.appendChild(searchResults);

searchResults.style.display="none";

}


// SEARCH ENGINE

function runSearch(query){

const results = qpickSearchData.filter(item =>

item.name.toLowerCase().includes(query)

);

renderResults(results);

}


// RENDER RESULTS

function renderResults(results){

searchResults.innerHTML="";

if(results.length === 0){

searchResults.innerHTML="<div class='search-item'>No results</div>";

}

results.forEach(item=>{

const div = document.createElement("div");

div.className="search-item";

div.innerHTML=`${item.name}`;

searchResults.appendChild(div);

});

searchResults.style.display="block";

}


// INPUT EVENT

searchInput.addEventListener("input",function(){

const query = this.value.toLowerCase();

if(query.length<1){

searchResults.style.display="none";
return;

}

runSearch(query);

});


// CLOSE OUTSIDE

document.addEventListener("click",function(e){

if(!searchContainer.contains(e.target)){

if(searchResults){

searchResults.style.display="none";

}

}

});