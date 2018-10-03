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

