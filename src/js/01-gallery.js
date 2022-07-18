import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');
const fn = imgCreate(galleryItems);
listEl.insertAdjacentHTML('afterbegin', fn);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function imgCreate(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" data-caption=${description}/>
</a>`;
    })
    .join(' ');
}
