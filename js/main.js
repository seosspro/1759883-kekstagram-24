const AUTHOR_NAMES = [
  "Дмитрий",
  "Евгений",
  "Максим",
  "Сергей",
  "Анна",
  "Валерий",
];

const LIKES = {
  min: 5,
  max: 10,
};

const COMMENTS = {
  min: 1,
  max: 5,
};

const COMMENT_LIST = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`];

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

  for (let i = 0; i < randomAmount; i++) {
    resultComments.push({
      avatar: `img/avatar-${getRandom(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS_LIST),
      name: getRandomArrayElement(AUTHOR_NAMES),
    });
  }

  return resultComments;
};
