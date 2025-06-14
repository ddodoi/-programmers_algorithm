function solution1(s: string): string {
  const numbers: number[] = s.split(" ").map(Number);
  bubble_sort(numbers);
  const min: number = numbers[0];
  const max: number = numbers[numbers.length - 1];
  return `${min} ${max}`;
}

function bubble_sort(array: number[]): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

// 테스트 케이스
console.log(solution1("1 2 3 4")); // "1 4"
console.log(solution1("-1 -2 -3 -4")); // "-4 -1"
console.log(solution1("-1 -1")); // "-1 -1"
