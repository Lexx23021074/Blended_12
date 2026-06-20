export const firstActiveBtn = () => {
  const allButton = document.querySelector('.categories__btn');
  if (allButton) {
    allButton.classList.add('categories__btn--active');
  }
};
