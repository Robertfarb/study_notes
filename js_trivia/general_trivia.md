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
  