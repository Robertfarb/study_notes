## Dynamic Programming

### Steps to solving a dynamic programming problem
  1) Identify if it is a dynamic programming problem
  2) Decide a state expression with least parameters
  3) Formulate state relationship
  4) Do tabulation (Or add memoization)
      * Decide if we'll take a top down or bottom-up approach

### Longest Common Subsequence
  * LCS Problem Statement: Given two sequences, find the length of the longest subsequence
  presernt in both of them. A subsequence is a sequence that appears in the same relative orde, but not necissarily contiguous. For example: "abc", "abg", "bdf", "aeg", "acefg"... are subsequences of "abcdefg".
  * A string of length n has 2^n possible subsequences.
  * e.g LCS for input sequences "ABCDGH" and "AEDFHR" is "ADH"
  * Naive solution is to generate all subsequences of both given sequences and find the longest matching subsequence.
  * Dynamic Programming Approach:
    * Let the input sequences be X[0..m-1] and Y[0..n-1] of lengths m and n respectively. And let L(X[0..m-1], Y[0..n-1]) be the length of LCS of the two sequences X and Y. Following is the recursive definition of L(X[0..m-1], Y[0..n-1]).
    * If last characters of both sequences match (or X[m-1] == Y[n-1]) then 
    L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])
    * If last characters of both sequences do not match (or X[m-1] != Y[n-1]) then L(X[0..m-1], Y[0..n-1]) = MAX ( L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]) )
  * The LCS problem has `optimal substructure` property as the main problem can be solved using solutions to subproblems. 



