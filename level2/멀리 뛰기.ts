function solution14(n: number): number {
  let fib: number[] = new Array(n + 1).fill(0);
  fib[1] = 1;
  fib[2] = 2;
  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n] % 1234567;
}

console.log(solution14(4));
console.log(solution14(3));
