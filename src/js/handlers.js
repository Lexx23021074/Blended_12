import { activeBtn, firstActiveBtn } from './helpers';
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from './products-api';
import {
  clearProducts,
  renderCategories,
  renderProducts,
} from './render-function';

export const getCategories = async () => {
  try {
    const res = await fetchCategories();
    renderCategories(['all', ...res]);
    firstActiveBtn();
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetchProducts(1);
    console.log(res);
    renderProducts(res.products);
  } catch (error) {
    console.log(error);
  }
};

export const handleCategoryClick = async e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const category = e.target.textContent;
  let products = null;
  try {
    if (category === 'all') {
      const allProducts = await fetchProducts(1);
      products = allProducts.products;
    } else {
      const res = await fetchProductsByCategory(category);
      products = res.products;
    }
    clearProducts();
    renderProducts(products);
    activeBtn(e.target);
  } catch (error) {
    console.log(error);
  }
};
