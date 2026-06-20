import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const _=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},y=t=>{const s=document.querySelector(".categories__btn--active");s&&s.classList.remove("categories__btn--active"),t.classList.add("categories__btn--active")},m="https://dummyjson.com",a={categories:"/products/category-list",pages:"/products",productsByCategory:"/products/category"},n=12;o.defaults.baseURL=m;const b=async()=>(await o.get(a.categories)).data,i=async t=>(await o.get(a.pages,{params:{limit:n,skip:(t-1)*n}})).data,f=async t=>(await o.get(`${a.productsByCategory}/${t}`)).data,r={categories:document.querySelector(".categories"),products:document.querySelector(".products")},P=t=>{const s=t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("");r.categories.innerHTML=s},d=t=>{const s=t.map(({title:e,brand:c,category:l,price:u,id:p,thumbnail:g})=>`<li class="products__item" data-id="${p}">
    <img class="products__image" src="${g}" alt="${e}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${c}</p>
    <p class="products__category">Category: ${l}</p>
    <p class="products__price">Price: $${u}</p>
 </li>
`).join("");r.products.insertAdjacentHTML("beforeend",s)},$=()=>{r.products.innerHTML=""},B=async()=>{try{const t=await b();P(["all",...t]),_()}catch(t){console.log(t)}},C=async()=>{try{const t=await i(1);console.log(t),d(t.products)}catch(t){console.log(t)}},v=async t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;let e=null;try{s==="all"?e=(await i(1)).products:e=(await f(s)).products,$(),d(e),y(t.target)}catch(c){console.log(c)}};B();C();r.categories.addEventListener("click",v);
//# sourceMappingURL=index.js.map
