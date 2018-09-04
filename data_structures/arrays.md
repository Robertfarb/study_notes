# Arrays
## Static Array
  * The static array is limited to a set length that is determined at initialization
  * Primitivite form of an array that is not resizeable.
  * Core functionality: `#find, #push, #delete'
    * find / push run in 0(1) time
    * delete runs in O(n) time
  * The dynamic array is built off of the static array.
  * O(1) insertion time
  * O(1) lookup time
  * Limited to getting, setting, cannot change it's length
## Dynamic Array
  * The array that we know and love with useful methods (build off of the low-level static array)
  * Push / Pop in O(n) time (worst case)
  * Push / Pop in O(1) time (best case)
  * Shift / Unshift 
## Ring Buffer
  * Ring buffers turn a static array into a ring  
  * Mod by the capacity of a dynamic array to turn it into a ring buffer
  * In Ruby we can mod a negative `-1 % 4 == 3`
  * Ring buffer
    * mod by the capacity to wrap our dynamic array.
    * Physical index is used in a static array and logical index is used in a dynamic array
  * Ring buffer allows us to shift / unshift in totally O(1) constant time
  
## Queue with Max
