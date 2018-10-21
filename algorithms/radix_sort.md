# Radix Sort
  * A Radix is another term for "base".
    * A radix represents how many `digits` are used in a number system.
    * Binary sys has a radix of 2
    * Hexadecimal sys has a raadix of 16
  * Radix sort is a non-comparison integer sorting algorithm
  * Radix sort sorts integers by grouping them using individual digits as keys, often using counting sort to implement the work of sorting.
  * The idea of radix sort is to do a digit by digit sort starting from the least significant digit to most significant digit.

  
  * Time Complexity: O(d*(n+b))
  * Ideal use case for Radix Sort:
    * if we have log2n bits for every digit, the running time of Radix appears to be better than quick sort for a wide range of input numbers. The constant factors hidden in asymptotic notation are higher for radix sort and quick-sort uses hardware more efficiently

  