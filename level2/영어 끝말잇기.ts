function solution15(n: number, words: string[]) {
  let fail: number = 0; //어떤 번호의 사람이 탈락하는지
  let count: number = 0; //몇번 째에 탈락하는지

  for (let i = 0; i < words.length - 1; i++) {
    if (
      words[i][words[i].length - 1] !== words[i + 1][0] ||
      words.slice(0, i + 1).includes(words[i + 1])
    ) {
      fail = ((i + 1) % n) + 1;
      count = Math.floor((i + 1) / n) + 1;
      break;
    }
  }

  return [fail, count];
}

console.log(
  solution15(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution15(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution15(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
