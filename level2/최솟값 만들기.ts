function solution3(a: number[], b: number[]): number {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  return a.reduce((sum, a, i) => sum + a * b[b.length - 1 - i], 0);
}

console.log(solution3([1, 2, 4], [5, 4, 4]));
console.log(solution3([1, 2], [3, 4]));
