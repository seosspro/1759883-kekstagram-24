const AUTHOR_NAMES = [
  'Дмитрий',
  'Евгений',
  'Максим',
  'Сергей',
  'Анна',
  'Валерий',
];

const LIKES = {
  min: 5,
  max: 10,
};

const COMMENTS = {
  min: 1,
  max: 5,
};

const COMMENTS_LIST = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandom(0, array.length - 1)];
}

const getCommentsArray = function (randomAmount) {
  const resultComments = [];

  for (let iz = 0; iz < randomAmount; iz++) {
    resultComments.push({
      avatar: `img/avatar-${getRandom(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS_LIST),
      name: getRandomArrayElement(AUTHOR_NAMES),
      id: 0,
    });
  }

  return resultComments;
};

const getPhoto = function (objectsAmount) {
  const resultPhoto = [];

  for (let ix = 1; ix <= objectsAmount; ix++) {
    resultPhoto.push({
      url: `photos/${ix}.jpg`,
      description: 'photo',
      likes: getRandom(LIKES.min, LIKES.max),
      comments: getCommentsArray(getRandom(COMMENTS.min, COMMENTS.max)),
      id: 0,
    });
  }
  // eslint-disable-next-line no-unused-vars
  getPhoto();
  return resultPhoto;
};
