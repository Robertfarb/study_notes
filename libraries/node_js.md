## Node.js

* What is an error-first callback?
  * Error-first callbacks are used to pass errors and data as well. You have to pass the error as the first parameter, and it has to be checked to see if something went wrong. Additional arguments are used to pass data.
* How can you avoid callback hell?
  * `modularization`: break callbacks into independent functions
  * Control flow library like async
  * Use `promises`
  * use async/await