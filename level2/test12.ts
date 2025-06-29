function solution13(k: number, tangerine: number[]) {
  tangerine.sort((a, b) => a - b);
  console.log(tangerine);
}

console.log(solution13(6, [1, 3, 2, 5, 4, 5, 2, 3]));
