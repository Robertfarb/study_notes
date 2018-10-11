## The Event Loop in JavaScript
* Javascript has a `callstack`, `event loop`, `callback queue`
* JS runtime is composed of a heap and the callstack.
* Javascript runtime is a heap where memory allocation happens
* Since JS is a single threaded language, there is one callstack and that means that only one thing cam happen at a time.
* The callstack is a data structure that records where in the program we are
  * all we can do is push onto the stack and pop off.
* Event loop and callback queue
* Asynchronous callbacks are the solution to browser blocking

* The call stack
  * JS is a single threaded programming language (it can only run one thing at a time)
    * In ruby many things can happen at once (It's a threaded language)
  * The call stack is a data structure that records where in the program we are, we can push on to the stack and pop off the stack
  * A good example to use when explaining the callstack is a setTimeout(() => console.log("hi"), 500)
    * The console log get's added to the callstack and is not popped off of the call stack until a half a second has passed.

  * The event loop is the simplest little piece in the whole equation.
  * The event loop's job is to look at the stack and look at the task queue...
    * If the stack is empty, the event loop pushes the callback from the CB queue onto the stack and then it gets to run.
    * Wrapping a function in a setTimeout(() => {}, 0) defer something until the stack is clear.
    * callbacks from the cb queue will not happen `until the stack is clear`