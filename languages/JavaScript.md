## Tricky JS Closure Questions
```js
// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
setTimeout(function() {
  console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000);
}
```
* Answer: Index: 4, element: undefined (printed 4 times)
* Why:
  * The setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it printsd out the value of I which ends up being 4 (4 is out of scope in this array.)

