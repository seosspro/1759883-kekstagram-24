import { getRandom, getRandomArrayElement } from './util.js';
import { AUTHOR_NAMES, COMMENTS, COMMENTS_LIST, LIKES } from './const.js';

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
      id: ix,
    });
  }

  return resultPhoto;
};

export { getCommentsArray, getPhoto };
