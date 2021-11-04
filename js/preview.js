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

const onPopupEscPress = function (evt) {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeBigPicture();
  }
};

const closeBigPicture = function () {
  preview.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

const onPopupEscPress = function (evt) {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeBigPicture();
  }
};

picturesContainer.addEventListener('keydown', function (evt) {
  if (
    evt.keyCode === window.util.ENTER_KEYCODE &&
    evt.target.classList.contains('picture')
  ) {
    openBigPicture(window.picturesData, indexPhoto - 1);
  }
});

bigPictureClose.addEventListener('click', function () {
  closeBigPicture();
});
