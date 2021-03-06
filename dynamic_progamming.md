# Dynamic Programming
  * What is Dynamic Programming?
    * We are going to be keeping track of work having been done already, and use that work
    to solve problems we've already solved in constant time
    * Improving performance of solutions by reusing work we've already done.
  * Top-Down Methods: 
    * Memoization: keeping track of the work we've already done
    * typical of recursive implementations that depend on solutions further down the change
    * Top down is very typical of a recursive implementation
  * Bottom-Up
    * Uses smaller solutions as the basis of larger solutions
    * relationship between a problem we've solved and the next problem remains the same
  * Fibonacci
    * Top down fibonacci

    ```ruby
    class Fibonacci
      def initialize
        @cache = {1 => 1, 2=> 1}
      end

      def fibonacci
        return cache[n] if @cache[n]
     
        ans = fibonacci(n - 1) + fibonacci(n - 2)
        @cache[n] = ans
        ans
       end
      end
    end
    ````

## Pass by reference v. pass by value 
  * Pass by reference is passing a pointer to a data store from call to call
    * In JavaScript all non-primitive datatypes are passed by reference so we could pass an Array or hash
    in this way.
    * In Ruby **everything** is passed by value, meaning when a parameter is passed into a function, that
    function makes a copy of the parameter and refers to and mutates that copy.
## The Burglar Problem
  * take in an array, and as a burglar we can rob any house in the neighborhood, except the ones that are adjacent to eachother