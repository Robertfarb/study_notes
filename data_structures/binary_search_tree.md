## Binary Search Tree
* Data structure that's ubiquitously used in software
* Everything on the left side of a BST must be lesser than the root node
* Every node on the right side of a BST must have a greater value than the root node
* Everything in a BST is another BST (recursion)
* Every subtree must follow the same rules (left nodes lesser than root), parent nodes greater than root
*  `#find`
* `#insert` start at root, if el is greater than root, put it in the right side,
if el is less start traversing the left and check each next node accordingly
  * for insert and find at each level we just check if we need to place the element to the left or right of the element we're currently on. This is determined by the size of the element.