#JavaScript  
* [Tricky JS Closure Questions](#tricky-js-closure-questions)
* [Prototype](#prototype)
* [Prototypal Inheritance](#prototypal-inheritance-review)
* [ES5 v. ES6](#es5-v-es6)
* [Function Expression v. Function Declaration](#function-expression-v-function-declaration)

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
  * The setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of I which ends up being 4 (4 is out of scope in this array.)

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

  ### Write a function that would allow you to do this 
  
  ```js
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
  ```

  ```js
    function createBase(base) {
      return function (num) {
        return num + base;
      }
    }
  ```

### How would you use a closure to create a private counter?
 * Create a function within an outer function that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function
 ```js
  function counter() {
    let _counter = 0;
    
    return {
      add: function(incVal) {_counter += incVal},
      retrieve: function() {return `the counter is currently at ${_counter}`}
    }
  }

  var c = counter();
  c.add(5); 
  c.add(9);
  c.retreive();
 ```

 ## `Prototype`
  * JavaScript has had prototypal inheritance from the very beginning. The antiquated way
  to set the prototype of an object would be to use a "prototype" property of the constructor function of an object
  * When a new object is created using `new Obj ()` that objects prototype is set to Obj.prototype
  * The default "prototype" for JS functions is an object with the property constructor that points back to the function itself.
  * Object.prototype is not the same as [[Prototype]]. The only thing Object.prototype does is sets the [[Prototype]] of new objects when new Object() is called.d
  ``` js
  function Animal(type) {
    this.type = type;
  }

  function Dog(name) {
    this.name = name;
  }

  const Stella = new Dog("Stella");
  ```
  * In the case above, `Animal` is the constructor function
    * Stella's `__proto__ `references Animal.prototype
  * It is possible to change the prototype of an object using `setPrototypeOf(Dog.prototype, Animal.prototype)`

  ### Prototypal Inheritance Review
  ```js
  function Cat(name) {
    this.name = name;
  }

  Cat.prototype.meow = function () {
    console.log(`${this.name} says meow!`)
  }

  let linux = new Cat("linux");
  linux.meow();
  ```

  * Cat is the constructor function that, when called, will create a new object.
  * A Prototype is a just an object that is a property of the constructor function
  * When we make a new instance of Cat, we run the constructor function
  * When we call linux.meow() it's going to look in it's own object and see if it has a function defined on itself... if not it will go up to it's prototype and look for that function and continue up until there is nothing else on the chain.
  * __proto__ points to the prototype that the constructor function points to. 

## `ES5 v. ES6`
  ### ES6 Block Scope
  * ES5 only had function level scope. ES6 provides "block" level scoping when we use let or const instead of var
  * ES6 doesn’t allow duplicate declaration of variables when we declare them using “let” or “const” in the same scope. This is very helpful in avoiding duplicate function expressions coming from different libraries
  
  ### IIFE
  * ES6 eliminates the need for IIFE

  ### Fat arrow functions maintain the context of "this"
  * in ES5 "this" can vary based on "where" it is called and how it is called.
  * in ES6 lexical this forces the variable this to always point to the object where it is physcially located.

## `Function Expression v. Function Declaration`
  * Function Expression: 
    * A function expression is created when the execution reaches it and is useable from then on - it is not hoisted
    * e.g: 
    ```js
      const sum = function(a , b) {
        return a + b
      }
    ```  
  
  * Function Declaration:
    * A Function Declaration can be called both before and after it was defined — it is hoisted.
    ```js
    function sum(a, b) {
      return a + b;
    }
    ```
  