import { getPhoto } from './mock.js';

export const drawPhotos = () => {
  const data = getPhoto(25);

  const templateFragment = document.querySelector('#picture').content;
  const container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  const template = templateFragment.querySelector('a');

  for (let i = 0; i < data.length; i++) {
    const elementClone = template.cloneNode(true);
    elementClone.querySelector('.picture__info').content = data[i].description;
    elementClone.querySelector('.picture__comments').textContent =
      data[i].comments.length;
    elementClone.querySelector('.picture__likes').textContent = data[i].likes;
    fragment.appendChild(elementClone);
  }

  container.appendChild(fragment);
};
