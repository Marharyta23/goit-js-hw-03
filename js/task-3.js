function filterArray(numbers, value) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
