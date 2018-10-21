# Bubble Sort
  * Time Complexity:
    * Best case: O(n)
      * This best case hits when the array is nearly sorted
    * Worst Case: O(n^2)
  * When may it be ideal to use Bubble Sort?
    * Find K largest (or smallest) elements in an array;
      * A clever approach here would be to bubble sort max of k times.

```js
function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++ ) {
      if (i + 1 === arr.length) continue;
        if (arr[i] > arr[i + 1]) {
          let curr = arr[i], next = arr[i + 1];
          arr[i] = next,  arr[i + 1] = curr;
          sorted = false;
        }
      }
  } 
  return arr;
}
```