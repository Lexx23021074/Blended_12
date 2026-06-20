import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const c=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},a="https://dummyjson.com",r={categories:"/products/category-list"};e.defaults.baseURL=a;const n=async()=>(await e.get(r.categories)).data,i={categories:document.querySelector(".categories")},g=t=>{const s=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("");i.categories.innerHTML=s},l=async()=>{try{const t=await n();g(["all",...t]),c()}catch(t){console.log(t)}};l();
//# sourceMappingURL=index.js.map
