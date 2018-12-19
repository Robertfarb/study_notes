## Node.js

* What is an error-first callback?
  * Error-first callbacks are used to pass errors and data as well. You have to pass the error as the first parameter, and it has to be checked to see if something went wrong. Additional arguments are used to pass data.
* How can you avoid callback hell?
  * `modularization`: break callbacks into independent functions
  * Control flow library like async
  * Use `promises`
  * use async/await
* What are promises?
  * Promises are a concurrency primitive, first described in the 80s. Now they are part of most modern programming languages to make your life easier. Promises can help you better handle async operations.
  * e.g:
    ```js
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('result')
        }, 100)
      })
      .then(console.log)
      .catch(console.error)
    ```
* What tools can be used to ensure consistent style?
  * ESLint
  * Standard
  * Use 'Strict'
* What is a stub?
  * Stubs are functions/programs that simulate the behaviors of components/modules. Stubs provide canned answers to function calls made during test cases.
* If you have to debug a huge codebase, and you don't know which Promise can potentially hide an issue, you can use the `unhandledRejection` hook. It will print out all unhandled Promise rejections.