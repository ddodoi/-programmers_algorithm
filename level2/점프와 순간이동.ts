function solution11(N: number): number {
  let result: number = 0;
  while (N !== 0) {
    if (N % 2 === 0) {
      N /= 2;
    } else {
      N--;
      result++;
    }
  }
  return result;
}

console.log(solution11(5));
console.log(solution11(6));
console.log(solution11(5000));
