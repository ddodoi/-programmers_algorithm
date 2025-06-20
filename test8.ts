function solution8(s: string): string {
  let deleted_s: string = "";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      deleted_s = s.slice(0, i - 1) + s.slice(i + 1);
    }
  }
  return deleted_s;
}

console.log(solution8("baabaa"));
