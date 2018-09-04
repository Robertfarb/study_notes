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
  * Dynamic refers to the fact that our array resizes dynamically based on the available space
  * #find runs in constant time 
  * #delete runs in O(n) time
  * The array that we know and love with useful methods (build off of the low-level static array)
  * Push / Pop in O(n) time (worst case)
  * Push / Pop in O(1) time (best case)
  * Shift / Unshift 
  * In order to resize the array to allow room for incoming elements:
    * When we run out of space (allocated memory is too small) we will double the size of the current array, and copy over the elements currently stored in the array. This will be expensive upfront, but give us n free insertions moving forward.
## Ring Buffer
  * Ring buffers turn a static array into a ring  
  * Mod by the capacity of a dynamic array to turn it into a ring buffer
  * In Ruby we can mod a negative `-1 % 4 == 3`
  * Ring buffer
    * mod by the capacity to wrap our dynamic array.
    * Physical index is used in a static array and logical index is used in a dynamic array
  * Ring buffer allows us to shift / unshift in totally O(1) constant time
  * We keep track of the start index in a ring buffer so we know where the values of concern begin
    * e.g. `[_, _, 1, 2, 3, 4]` start_idx = 2 
  
## Queue with Max
  
  * A queue with max uses a RingBuffer as it's `@store`
  * This data structure holds a `@max_array` which contains a running list of the current max value
  in the Queue, in O(1) time.
  * Available methods to Queue with Max:
    * `#enqueue, #dequeue, #max`

## Time complexity of Ruby's built-in Array Methods
  * []
    * O(1)
  * delete
    * O(n)
  * push
  * inject