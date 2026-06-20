import { firstActiveBtn } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';

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
