// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery = galleryItems;
const divGallery = document.querySelector('.gallery');

const markup = gallery.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
}).join('');

divGallery.insertAdjacentHTML('beforeend', markup);

divGallery.addEventListener('click', urlImage);

function urlImage (e) {
  e.preventDefault();

  const url = e.target.dataset.source;

  if (!url) return;
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
}