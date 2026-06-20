import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const u=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},g="https://dummyjson.com",r={categories:"/products/category-list",pages:"/products"},o=12;e.defaults.baseURL=g;const _=async()=>(await e.get(r.categories)).data,m=async t=>(await e.get(r.pages,{params:{limit:o,skip:(t-1)*o}})).data,a={categories:document.querySelector(".categories"),products:document.querySelector(".products")},y=t=>{const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>
`).join("");a.categories.innerHTML=s},b=t=>{const s=t.map(({title:c,brand:n,category:i,price:p,id:d,thumbnail:l})=>`<li class="products__item" data-id="${d}">
    <img class="products__image" src="${l}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${n}</p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: $${p}</p>
 </li>
`).join("");a.products.insertAdjacentHTML("beforeend",s)},$=async()=>{try{const t=await _();y(["all",...t]),u()}catch(t){console.log(t)}},f=async()=>{try{const t=await m(1);console.log(t),b(t.products)}catch(t){console.log(t)}};$();f();
//# sourceMappingURL=index.js.map
