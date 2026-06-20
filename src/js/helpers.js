export const firstActiveBtn = () => {
  const allButton = document.querySelector('.categories__btn');
  if (allButton) {
    allButton.classList.add('categories__btn--active');
  }
};

export const activeBtn = (btn) => {
  const activeBtn = document.querySelector('.categories__btn--active');
  if (activeBtn) {
    activeBtn.classList.remove('categories__btn--active');
  }
  btn.classList.add('categories__btn--active');
};
