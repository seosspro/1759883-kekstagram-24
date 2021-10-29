const templateFragment = document.querySelector('#picture').content;

const fragment = document.createDocumentFragment();

const template = templateFragment.querySelector('a');

for (let i = 0; i <= 25; i++) {
  const elementClone = template.cloneNode(true);
  elementClone.children[0].textContent = i;
  fragment.appendChild(elementClone);
}
