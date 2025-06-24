function solution8(s: string): number {
  let stack: string[] = [];

  for (let i of s) {
    if (
      stack[stack.length - 1] === undefined ||
      i !== stack[stack.length - 1]
    ) {
      stack.push(i);
    } else if (i === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution8("baabaa"));
console.log(solution8("cdcd"));
