## Breadth First / Depth First Search

## Depth First Search
  * Depth first traversal requires a `stack`
  * Step 1) push vertex onto a stack, visit it and mark it as visited
  * Step 2) look at vertex at the top of the stack and push all adjacent vertices that haven't been visited to the top of the stack then mark them as visited
  * Step 3) Continue to find unvisited vertices until there are no more adjacent unvisited vertices
  * Step 4) if there are no adjacent vertices that are unvisited pop that vertex off the stack

## Breadth First Traversal
  * Breadth First Traversal uses a queue instead of a stack
  * Keep track of vertices we still have to visit using a Queue
  * Step 1) Visit first vertex, and push it onto the result
  * Step 2) Visit vertex B, add it to result and push it onto the queue, but `stay at vertex A`
  * Step 3) Once there are no more Vertices to visit when on a current vertex, Dequeue that vertex and move onto the next unvisted vertex.
  * Step 4) Continue until all vertices are visited.
