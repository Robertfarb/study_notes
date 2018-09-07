## QuickSort
* recursive algorithm that always starts with a base case
* base case will return if the array is <= 1
* Step 1:
  select the pivot (first element of the input array) for simplcity sake

## In place quicksort
* Essentially the same steps as the naive quicksort
* Partition the array around the pivot
  * we're not actually going to create new arrays ever
  * Call quicksort on left and right recursively
  * Set a barrier
    * everything to the left of it will be less than it and everything on the right 
    will be greater than the barrier
    * Barrier will simply be an index in the array
* Step 1: Select pivot (first element)
* Step 2: Partition array around pivot
* Step 3: Recurse on left and right
* Def params: (start_array, start_idx, end_idx)