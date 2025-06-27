function solution2(s: string): boolean {
  const param: string[] = s.split("");

  if (param[0] == ")") {
    return false;
  }

  let stack: string[] = [];

  for (let i of param) {
    if (i == "(") {
      stack.push(i);
    } else {
      stack.pop();
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution2("(())()"));
