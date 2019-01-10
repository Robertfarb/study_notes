// Iterative Fibbonacci solution
function fibs(n) {
  let fibs = [0, 1];
  for (let i = 0; fibs.length < n; i++) {
    let lastFib = fibs.length - 1;
    let secondToLastFib = fibs.length - 2;
    fibs.push(fibs[lastFib] + fibs[secondToLastFib]);
  }

  return fibs;
}

console.log(fibs(10));

// Recursive Fibbonacci solution
function fibsRecur(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  lastFibs = fibsRecur(n - 1);
  lastFibs.push(lastFibs[lastFibs.length - 1] + lastFibs[lastFibs.length - 2]);

  return lastFibs;
}

console.log(fibsRecur(10));
