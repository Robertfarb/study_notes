# Recursion

## Tail call recursion
  * A recursive function is tail recursive when recursive call is the last thing executed by the function. For example the following C++ function print() is tail recursive.

// An example of tail recursive function
```js 
function (n) { 
    if (n < 0)  return; 
    n.concat(""); 
  
    // The last executed statement is recursive call 
    print(n-1); 
} 
'''