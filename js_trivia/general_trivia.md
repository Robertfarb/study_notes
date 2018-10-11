# General JavaScript Trivia Questions
* `7 falsey values in JS`:  
  1) false
  2) 0
  3) -0
  4) ""
  5) null
  6) undefined
  7) NaN

* `What is createDocumentFragment`
  * createDocumentFragment is a JavaScript function that creates a mini DOM
  you can append elements to in order to avoid costly insertions. Once the elements are appended you can append the fragment to a node element and the fragment itself will dissapear.
  * DocumentFragments are DOM Nodes
  * Since the document fragment is in memory and not a part of the main DOM Tree, appending
  children to it does not cause page reflow

* What is page `reflow`  
  * `reflow` is the computation of element's position and geometry in the DOM, using document fragments could result in reduction in reflow and better overall performance.
  ```js
    var element  = document.getElementById('ul'); // assuming ul exists
    var fragment = document.createDocumentFragment();
    var browsers = ['Firefox', 'Chrome', 'Opera', 
        'Safari', 'Internet Explorer'];

    browsers.forEach(function(browser) {
        var li = document.createElement('li');
        li.textContent = browser;
        fragment.appendChild(li);
    });

    element.appendChild(fragment);
    ```
* Primitive datatype in JavaScript  
  * A primitive datatype is not an object, it's immutable, and has no attributes / methods defined directly on it
  * e.g: Number, String, Null


* Is null an object?
  * NO.
  * typeof null returns object, but that is a bug in JS...
  * Null is a primitive datatype

* Are let and const hoisted?  
  * yes

* Which happens first: document.onload or window.onload?  
  * document.onload

* 7 primitive datatypes in JS:  
  1) Number
  2) String
  3) Symbol
  4) Undefined
  5) Null
  6) Boolean
  7) Object

* Value of `this` inside of a setTimeout function?
  * The window


* Null vs. Undefined
  * `Undefined` is the absence of a definition. It is used as the default value for intializing variables, function arguments that were not provided and missing properties of objects. Functions return undefined when nothing has been explicitly returned.
  * `Null` is the absence of a value, It is an assignment value that can be assigned to a variable as a representation of 'no-value'

* Are empty arrays true or false in JS?
  * True


* == vs. ===
  * == checks for equality `with coercion` and === checks for equality without coercion... strictly equality

* Tricky Comparisons
  * false == ""  // true
  * false == []  // true
  * false == {}  // false
  * "" == 0      // true
  * "" == []     // true
  * "" == {}     // false
  * 0 == []      // true
  * 0 == {}      // false
  * 0 == null    // false

* Reference vs. Value
  * Simple values (primitives) are always assigned by value-copy
  * Compound values always create a copy of the rerference on assignment: objects, arrays, functions
  e.g.:
  ```js
    var a = 2         // 'a' hold a copy of the value 2.
    var b = a;        // 'b' is always a copy of the value in 'a'
    b++;
    console.log(a);   // 2
    console.log(b);   // 3
    var c = [1,2,3];
    var d = c;        // 'd' is a reference to the shared value
    d.push( 4 );      // Mutates the referenced value (object)
    console.log(c);   // [1,2,3,4]
    console.log(d);   // [1,2,3,4]
    /* Compound values are equal by reference */
    var e = [1,2,3,4];
  ```

* `Explain Scope`
  * Scope refers to the execution context. It defines the accessibility of variales and functions in the code
  * `Global Scope`: The outermost scope. Variables declared outside a function are in the global scope and can be accessed in any other scope. In a browser, the window object is the global scope
  * `Local Scope`: A scope nested inside another function scope. Variables declared in a local scope are accessible within this scope as well as in any inner scopes.

* Explain Hoisting
  * The behavior of "moving" var and function declarations to the top of their respective scopes during the compilation phase is called `hoisting`
  * Function declarations are completeley hoisted in JS meaning that a declared function can be called before it is defined.
  * let and const are NOT hoisted

* Function expression vs. function declaration
  * function expression:
  ```js
  let sum = function(a, b) {
    return a + b;
  }
  ```
  * function declaration:
  ```js
  function sum(a, b) {
    return a + b;
  }
  ```
  * function expression is NOT hoisted
  * function declaration IS hoisted

  * Closures in JavaScript
    * A closure is the combination of a function and the lexical environment from which it was declared. Closure allows a function to access variables from an enclosing scope - `environment` - even after it leaves the scope in which it was declared
    * JavaScript closures refer to variables in the outer scope
    * Closures can refer to outer scope variables even after the outer function has returned.
    * One main benefit of closures is that it allows `data encapsulation`. This refers to the ideas that some data should not be directly exposed.

  * What does the new keyword do in JavaScript?
    * The `new` keyword invokes a constructor function, in turn creating a new Object.
    * In depth:  
        1) Creates a new object
        2) Sets the object's prototype to be the prototype of the `constructor function`
        3) Executes the constructor function with this as the newly created object
        4) Returns the created object. If the constructor returns an object, this object is returned.
    * Calling a constructor function without the new keyword does not actually create a new object in JS.
