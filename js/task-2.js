function makeArray(firstArray, secondArray, maxLength) {
  let splitedArray = firstArray.concat(secondArray);
  if (splitedArray.length > maxLength) {
    splitedArray = splitedArray.slice(0, maxLength);
  }
  return splitedArray;
}
