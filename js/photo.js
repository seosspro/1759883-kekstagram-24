import { getPhoto } from './mock.js';

export const drawPhotos = () => {
  const data = getPhoto(25);

  const templateFragment = document.querySelector('#picture').content;
  const container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  const template = templateFragment.querySelector('a');

  for (let ix = 0; ix < data.length; ix++) {
    const elementClone = template.cloneNode(true);
    elementClone.querySelector('.picture__info').content = data[ix].description;
    elementClone.querySelector('.picture__comments').textContent =
      data[ix].comments.length;
    elementClone.querySelector('.picture__likes').textContent = data[ix].likes;
    elementClone.querySelector('.picture__img').src = data[ix].url;
    fragment.appendChild(elementClone);
  }

  container.appendChild(fragment);
};
