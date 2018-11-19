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

