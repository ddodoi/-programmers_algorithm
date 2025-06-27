function solution12(people: number[], limit: number): number {
  let left: number = 0;
  let right: number = people.length - 1;
  let result = 0;
  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    result++;
  }

  return result;
}

console.log(solution12([70, 50, 80, 50], 100));
console.log(solution12([70, 80, 50], 100));
