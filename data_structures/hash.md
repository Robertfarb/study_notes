# Hashing
* A hash function is a sequence of mathematical operations that deterministically maps any arbitrary data into a defined range of values.
* A good hashing function is uniform in how it distributes the data over a range of values
* We want to be able to hash absolutely anything in order for something to be a good hashing function
* A hash function is deterministic meaning it should always produce the same value given the same input.

## HashSet
  * Can store any data type in our hash set now that we have our hashing functions
  * Hash every time before performing any operation on values we put into our Set
  * Slight improvement to the ResizingIntSet
  * When we get an int back we can modulo by num_buckets to determine which bucket the integer should go in
  * We'll create a hashMap but first we must create a subordinate, underlying data structures

