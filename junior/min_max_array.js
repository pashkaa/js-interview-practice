function findMaxMin(array) {
  let min = array[0],
    max = array[1];
  if (max < min) {
    let test = min;
    min = max;
    max = test;
  }
  for (let i = 2; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  return [min, max];
}

console.log(findMaxMin([1, 2, 3, 4, 5]));
console.log(findMaxMin([0, 99, 3, 6, 31]));
console.log(findMaxMin([77, 4, 1, 55]));
console.log(findMaxMin([8, 1]));
