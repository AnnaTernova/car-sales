'use strict';

const menu = document.querySelector('.checkbox-menu');
const panel = document.querySelector('.filter');

const openClosePanel = function () {
  panel.classList.toggle('open');
};

menu.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  openClosePanel();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && panel.classList.contains('open')) {
    panel.classList.remove('open');
  }
});

document.addEventListener('click', function (event) {
  const isClickInsidePanel = panel.contains(event.target);
  const isClickOnMenu = menu.contains(event.target);

  // If clicked outside both panel and menu, and panel is open → close it
  if (
    !isClickInsidePanel &&
    !isClickOnMenu &&
    panel.classList.contains('open')
  ) {
    panel.classList.remove('open');
  }
});

const favorites = new Set();

document.addEventListener('click', function (e) {
  // Check if the click was on the button or inside the button
  const button = e.target.closest('.car-action');
  if (!button) return;

  const img = button.querySelector('img');
  const carId = button.dataset.id;

  const isFavorited = favorites.has(carId);

  if (isFavorited) {
    img.src = './assets/favorite.svg'; // outline heart
    favorites.delete(carId);
  } else {
    img.src = './assets/favorite-clicked.svg'; // filled heart
    favorites.add(carId);
  }
});
