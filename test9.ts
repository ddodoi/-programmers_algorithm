function solution9(a: number, b: number): number[] {
  const s: number = a + b; //전체 카펫 넓이
  let result_a: number = 0;
  let result_b: number = 0;

  if (Number.isInteger(Math.sqrt(b))) {
    result_a = Math.sqrt(s);
    result_b = Math.sqrt(s);
  } else {
    let divisor: number[] = [];
    for (let i: number = 1; i <= s; i++) {
      //약수 구하기
      if (s % i === 0) {
        divisor.push(i);
      }
    }
    result_a = divisor[Math.floor(divisor.length / 2)];
    result_b = divisor[Math.floor(divisor.length / 2) - 1];
  }
  return [result_a, result_b];
}

// function solution9(a: number, b: number): number[] {
//   const s: number = a + b; //전체 카펫 넓이
//   let divisor: number[] = [];

//   for (let i: number = 1; i <= s; i++) {
//     //약수 구하기
//     if (s % i === 0) {
//       divisor.push(i);
//     }
//   }

//   if (divisor.length % 2 === 0) {
//     return [divisor[divisor.length / 2], divisor[divisor.length / 2 - 1]];
//   } else {
//     return [divisor[Math.floor(divisor.length / 2)]];
//   }
// }

console.log(solution9(10, 2));
console.log(solution9(8, 1));
console.log(solution9(24, 24));
console.log(solution9(26, 10));
