# Heap
## Priority Queue
* First in First out
* In a priority queue (think airlines), at each priority level some processes get to take place before other priority levels
* We can use a linked list to implement this priority queue
* Value can refer to a node's priority in the list
* Naive way to insert nodes is to iterate through the linked list until we find the node of one priority higher and insert the node into the list before the next priority level (O(n) time complexity)
* We can also use an LRU Cache to implement a priority queue
* We could use an array of bronze, silver gold, platinum, then place each new element in the array and sort (O(nlogn) time which is worse then our linked list solution)

We're going to use a heap to implement this priority queue
## Heap
* A heap is simply a binary tree that follows a certain set of rules
* Heap's are so intertwined with a priority queue, that some people use them interchangeably.
* Most use cases for heaps are priority queues
* Heaps are also used in heap sorts
* Heaps will have three methods we're concerned with
  * `#peek` this will return the current smallest integer in our data structure (O(1) time)
  * `#insert(el)` this must place an element at it's appropriate space in the heap in better than O(n) time
  * `#extract, #pop` returns the minimum value in our data structure, but also removecs it from the data structure entirely 
* ![Heap]('./img/1200px-Max-Heap.svg.png')