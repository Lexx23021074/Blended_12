import { firstActiveBtn } from './helpers';
import { fetchCategories } from './products-api';
import { renderCategories } from './render-function';

export const getCategories = async () => {
  try {
    const res = await fetchCategories();
    renderCategories(['all', ...res]);
    firstActiveBtn();
  } catch (error) {
    console.log(error);
  }
};
