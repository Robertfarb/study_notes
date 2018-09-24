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

###  Goal of the code is to alert numbers 0 after 1, 1 after 1.1 seconds and 2 , after 1.2 seconds respectively

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
```
* Will this do it? why or why not
  * No, it will not due to JS closures. It will actually alert 3, 3 times after 1, 1.1, and 1.2 seconds because of JS closures.
  * A JS closure is when an inner function has access to it's outer enclosing function's variables and properties.
  * The variable i is declared outside of the setTimeout function, in the for loop. so when the for loop is done running, each of the inner functions refers to the same variable i, which is 3.
* Solution is to use an `IIFE`, or an immediiately invoked function expression
  ```js
  for (var i = 0; i < 3; i++) {
    setTimeout(function(i_local) {
      return function () { alert(i_local) }
    }(i), 1000 + i)
  }
  ```
  * in the above solution we immediately invoke an anonymous function by passing it (i), as an argument i_local. This will correctly alert 0 after 1 second, 1 after