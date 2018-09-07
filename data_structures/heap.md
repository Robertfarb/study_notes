# Heap
## Priority Queue
* First in First out
* In a priority queue (think airlines), at each priority level some processes get to take place before other priority levels
* We can use a linked list to implement this priority queue
* Value can refer to a node's priority in the list
* Naive way to insert nodes is to iterate through the linked list until we find the node of one priority higher and insert the node into the list before the next priority level (O(n) time complexity)
* We can also use an LRU Cache to implement a priority queue
* We could use an array of bronze, silver gold, platinum, then place each new element in the array and sort (O(nlogn) time which is worse then our linked list solution)

We're going to use a heap to implement the priority queue
## Heap
* A heap is simply a binary tree that follows a certain set of rules:
  * A Heap must be a __complete tree__
    * filled from left to right on the bottom row...
  * **Heap Property**: any node must be greater than or equal to it's parent node
* Heap's are so intertwined with a priority queue, that some people use them interchangeably.
* Most use cases for heaps are priority queues
* Heaps are also used in heap sort  
* Below is a min heap because every node is greater than or equal to it's parent
* ![Heap](./img/nearly-complete-binary-tree-correct.png)
* Heaps will have three methods we're concerned with
  * `#peek` this will return the current smallest integer in our data structure (O(1) time)... (The root node of our tree will always be the value we're looking for)
  * `#insert(el)` this must place an element at it's appropriate space in the heap in better than O(logn) time
    * insertion checks the value of the parent node, if the child is less than it's parent the two nodes swap, and this continues to happen until the child node is greater than or equal to it's parent
  * `#extract, (#pop)` returns the minimum value in our data structure, but also removecs it from the data structure entirely
    * step 1: swap first and last element  
    * to make the extract work we can swap the furthest lower left element with the root node of the tree, and remove / return the lower right element which would be our min... now we need to fix the issue that the root node is the largest value.
    * Heapify the tree until the node is less than or equal too it's children
* completeness in a heap: filling in nodes from top to bottom, left to right
  * in a comlpete tree, we have to add the new node at the lowermost left position (in the above example it would have to be the left child of 3)

## Heapify Up
* Check parent node, and see if we should swap with the parent (if the parent is greater than itself swap...)
* O(logn) time complexity
* Log(n) as the input size doubles, number of operations increases linearly

## Implementation of Heaps
* Formula for determining array indices of each node's children
* (2i + 1)
* node at index 0 has two children at indices 1, 2... node at index 3 has two children at indicies 7, 8...
* Given the index of a child element we can do (i - 1) / 2 to determine the index of it's parent element
* peek will be the store[0]

## Heap Sort
Naive Solution:
* Input of unsorted array
* The naive solution will always run in O(nlogn) time
* step 1: `Heapify`
  * go through the list and for each element we add it to a heap
