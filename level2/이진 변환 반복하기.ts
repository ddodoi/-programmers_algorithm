function solution5(s: string): number[] {
  let zero_count: number = 0;
  let binary_count: number = 0;

  while (s !== "1") {
    const zerosRemoved: string = s.replace(/0/g, "");
    zero_count += s.length - zerosRemoved.length;

    s = zerosRemoved.length.toString(2);
    binary_count++;
  }

  return [binary_count, zero_count];
}

console.log(solution5("110010101001"));
