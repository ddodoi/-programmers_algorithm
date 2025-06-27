function solution9(n: number): number {
  let fib: number[] = new Array(n + 1).fill(0);
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }

  return fib[n];
}

console.log(solution9(3));
console.log(solution9(5));
