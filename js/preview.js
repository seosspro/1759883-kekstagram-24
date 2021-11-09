const picturesContainer = document.querySelector('.pictures');
const preview = document.querySelector('.big-picture');
const previewLikes = preview.querySelector('.likes-count');
const previewCommentsBlock = preview.querySelector('.social__comments');
const previewImage = preview.querySelector('.big-picture__img');
const commentPreview = document.querySelector('.comments-count').textContent;
const previewCaption = preview.querySelector('.social__caption');
const commentsLoader = preview.querySelector('.comments-loader');
const commentsCount = preview.querySelector('.social__comment-count');
const bigPictureClose = preview.querySelector('.big-picture__cancel');
const commentsBlock = preview.querySelector('.social__comments');
const oneCommentTemplate = commentsBlock.querySelector('.social__comment');
const LIMIT_PIC = 5;

const openBigPicture = function (data, index) {
  preview.classList.remove('hidden');
  document.addEventListener('keydown');

  previewImage.src = data[index].url;
  previewLikes.textContent = data[index].likes;
  commentPreview.textContent = data[index].comments.length;
  previewCaption.textContent = data[index].description;

  if (data[index].comments.length <= LIMIT_PIC) {
    commentsCount.classList.add('visually-hidden');
    commentsLoader.classList.add('visually-hidden');

    getСomments(data[index].comments);
  } else {
    cutComments = comments.slice(0);
    getСomments(cutComments);

    commentsLoader.addEventListener('click');
  }
};

const getСomments = function (itemPhoto) {
  const fragment = document.createDocumentFragment();

  for (const i = 0; i < itemPhoto.length; i++) {
    const itemComment = createСomment(itemPhoto[i]);
    fragment.appendChild(itemComment);
  }

  commentsBlock.innerHTML = '';
  commentsBlock.appendChild(fragment);
};
