function solution4(s: string): string {
  const input_s: string[] = s.split(" ");
  let result: string = "";
  input_s.map((s: string) => {
    if (s.length === 0) {
      result += " ";
    } else if (typeof(s[0])==Number)){
      result += s[0].toUpperCase() + s.slice(1).toLowerCase();
    }
    result += " ";
  });
  return result.slice(0, -1);
}

console.log(solution4(" 3for the what  1what"));
