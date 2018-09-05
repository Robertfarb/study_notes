# Set / Int Set
* A set is a data structure that's similar to an array and does not allow duplicate copies of any value
* Sets store unordered, unique items, and don't make any promises regarding insertion order.
* Very fast retrieval and can quickly look up the presence of values
* Abstract Data Type (high-level description of a structure and an API)

## MaxIntSet
* In a max int set we can only store integers that live within a predefined range.
* We know the maximum integer that will ever be stored, and we provide a set that can store it and any smaller positive number
* This intSet should raise an error if someone tries to insert, remove or check inclusion of a number that is out of bounds.
* API: 
  * `#insert`
  * `#remove`
  * `#include?`

## IntSet
  * Abstract data type that can keep track of an arbitrary range of integers
  * The intset's store consists of multiple 'buckets' which are subarrays that hold all of the IntSet's elements
  * To insert into the intset we use the modulo opuerator to access the correct bucket each time
  * insertion: `@store[num % num_buckets]` this will point to the correct subarray to insert into

## ResizingIntSet
  * Retrieval time of the IntSet above will get worse as the numnber of inputted elements grows
  * Scanning for an intem in an array takes O(n) time
  * This IntSet will also contain buckets, but the size of the buckets will increase as the size of the set increases.
  * The goal is to have buckets.length > N at all times
  * this takes time at first to resize the entire IntSet but will be amortized and provide free insertions downt the road


