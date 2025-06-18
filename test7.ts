function solution7(n: number): number {
  let result: number = n + 1;
  while (
    n.toString(2).split("0").join("") !== result.toString(2).split("0").join("")
  ) {
    result++;
  }
  return result;
}

console.log(solution7(78));
console.log(solution7(15));
