function solution16(arr: number[]): number {
  const sorted_arr = arr.sort((a, b) => b - a); //내림차순 정렬
  let lcm_num: number = lcm(sorted_arr[0], sorted_arr[1]);

  for (let i = 2; i < arr.length; i++) {
    lcm_num = lcm(lcm_num, sorted_arr[i]);
  }
  return lcm_num;
}

function gcd(a: number, b: number): number {
  //최대공약수 구하는 함수
  let result: number = 1;
  for (let i: number = Math.min(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      result = i;
      break;
    }
  }
  return result;
}

function lcm(a: number, b: number): number {
  //최소공배수 구하는 함수
  return (a * b) / gcd(a, b);
}

console.log(solution16([2, 6, 8, 14]));
console.log(solution16([1, 2, 3]));
