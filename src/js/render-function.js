import { refs } from './refs';

export const renderCategories = data => {
  const markup = data
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>
`
    )
    .join('');
  refs.categories.innerHTML = markup;
};
