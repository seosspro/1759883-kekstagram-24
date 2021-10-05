function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // MDN
}

function getRandomArrayElement(array) {
  return array[getRandom(0, array.length - 1)];
}

