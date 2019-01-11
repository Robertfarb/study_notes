function findMissingNumber(arr1, arr2) {
  arr1.forEach(num => {
    if (arr2.includes(num) === false) {
      return num;
    }
  });
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6], [6, 1, 4, 2, 5]));

