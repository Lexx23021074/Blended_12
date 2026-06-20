import { getCategories, getProducts, handleCategoryClick } from './js/handlers';
import { refs } from './js/refs';


getCategories();
getProducts();

refs.categories.addEventListener('click', handleCategoryClick);
