export function getRandFilteredElem(arr, filter) {
  var randEl = getRandEl(arr);
  while (randEl === filter) {
    randEl = getRandEl(arr);
  }
  return randEl;
}

export function getRandEl(arr) {
  return arr[genRandNum(0, arr.length -1)];
}

export function genRandNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}