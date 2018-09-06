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
  * **Heap Property**: any node's must be greater than or equal to it's parent node
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
* completeness in a heap: filling in nodes from top to bottom, left to right
  * in a comlpete tree, we have to add the new node at the lowermost left position (in the above example it would have to be the left child of 3)
