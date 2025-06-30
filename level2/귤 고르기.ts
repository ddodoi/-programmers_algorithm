function solution13(k: number, tangerine: number[]): number {
  const count = new Map<number, number>();

  for (const i of tangerine) {
    count.set(i, (count.get(i) || 0) + 1);
  }

  const sorted_count = [...count.entries()].sort((a, b) => b[1] - a[1]);
  let result: number = 0;

  for (let i = 0; i < sorted_count.length; i++) {
    result++;
    if (k > sorted_count[i][1]) {
      k -= sorted_count[i][1];
    } else {
      break;
    }
  }

  return result;
}

console.log(solution13(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution13(2, [1, 1, 1, 1, 2, 2, 2, 3]));
